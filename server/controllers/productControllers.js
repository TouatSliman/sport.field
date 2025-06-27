const { sql } = require("../config/db.js");

const getProducts = async (req, res) => {
  try {
    const products = await sql`SELECT * FROM products ORDER BY created_at DESC`;
    if (products.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No products found" });
    }
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await sql`SELECT * FROM products WHERE id = ${id}`;
    if (product.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const createProduct = async (req, res) => {
  const { name, description, price, image, category } = req.body;
  if (!name || !description || !price || !image || !category) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  try {
    const newProduct = await sql`
            INSERT INTO products (name, description, price, image, category)
            VALUES (${name}, ${description}, ${price}, ${image}, ${category})
            RETURNING *;
        `;
    res.status(201).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image, category } = req.body;

  try {
    const updatedProduct = await sql`
            UPDATE products
            SET name = ${name}, description = ${description}, price = ${price}, image = ${image}, category = ${category}
            WHERE id = ${id}
            RETURNING *;
        `;
    if (updatedProduct.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: updatedProduct[0] });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await sql`
            DELETE FROM products
            WHERE id = ${id}
            RETURNING *;
        `;
    if (deletedProduct.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: deletedProduct[0] });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
