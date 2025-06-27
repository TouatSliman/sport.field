const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
// Importing product routes
const productRoutes = require("./routes/productRoutes.js");
const { sql } = require("./config/db.js");
const { aj } = require("./lib/arcjet.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../client/dist")));

// allow origin
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    process.env.CLIENT_URL || "http://localhost:5173"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//apply arcjet middleware
app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: true });
    if (decision.isDenied()) {
      if (decision.isBot()) {
        return res
          .status(403)
          .json({ success: false, message: "Access denied for bots" });
      } else if (decision.isRateLimited()) {
        return res
          .status(429)
          .json({ success: false, message: "Rate limit exceeded" });
      } else {
        return res
          .status(403)
          .json({ success: false, message: "Access denied" });
      }
    }

    // chek for spoofed bots
    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      return res
        .status(403)
        .json({ success: false, message: "Access denied for spoofed bots" });
    }
    next();
  } catch (error) {
    console.error("Arcjet protection failed:", error);
    return res
      .status(500)
      .json({ success: false, message: "Protection service error" });
  }
});


// Routes
app.use("/api/products", productRoutes);

app.get("/getState", async (req, res) => {
  await sql`
  SELECT DISTINCT wilaya_code, wilaya_name
  FROM algeria_cities
  ORDER BY wilaya_code
  `
    .then((result) => {
      res.json({ success: true, data: result });
    })
    .catch((error) => {
      console.error("Error fetching states:", error);
      res
        .status(500)
        .json({ success: false, message: "Error fetching states" });
    });
});

app.get("/getCity/:stateCode", async (req, res) => {
  const { stateCode } = req.params;
  await sql`
    SELECT commune_name
    FROM algeria_cities
        WHERE wilaya_code = ${stateCode}
            ORDER BY commune_name
  `
    .then((result) => {
      res.json({ success: true, data: result });
    })
    .catch((error) => {
      console.error("Error fetching cities:", error);
      res
        .status(500)
        .json({ success: false, message: "Error fetching cities" });
    });
});


app.get("/productImages/:product_id", async (req, res) => {
  const { product_id } = req.params;
  await sql`
    SELECT image_url FROM product_images
    WHERE product_id = ${product_id}
  `
    .then((result) => {
      res.json({ success: true, data: result });
    })
    .catch((error) => {
      console.error("Error fetching product images:", error);
      res
        .status(500)
        .json({ success: false, message: "Error fetching product images" });
    });
});

app.get("/deliveryPrices", async (req, res) => {
  await sql`
    SELECT * FROM delivery_prices
  `
    .then((result) => {
      res.json({ success: true, data: result });
    })
    .catch((error) => {
      console.error("Error fetching delivery prices:", error);
      res
        .status(500)
        .json({ success: false, message: "Error fetching delivery prices" });
    });
});



//apply arcjet middleware
app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: true });
    if (decision.isDenied()) {
      if (decision.isBot()) {
        return res
          .status(403)
          .json({ success: false, message: "Access denied for bots" });
      } else if (decision.isRateLimited()) {
        return res
          .status(429)
          .json({ success: false, message: "Rate limit exceeded" });
      } else {
        return res
          .status(403)
          .json({ success: false, message: "Access denied" });
      }
    }

    // chek for spoofed bots
    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      return res
        .status(403)
        .json({ success: false, message: "Access denied for spoofed bots" });
    }
    next();
  } catch (error) {
    console.error("Arcjet protection failed:", error);
    return res
      .status(500)
      .json({ success: false, message: "Protection service error" });
  }
});

// Serve the index.html file for the root route
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});
// Start the server

async function startServer() {
  try {
    await sql`
        create table if not exists products (
            id serial primary key,
            name VARCHAR(255) not null,
            description TEXT,
            price DECIMAL(10, 2) not null,
            image VARCHAR(255) not null,
            category VARCHAR(255) not null,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

startServer().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
