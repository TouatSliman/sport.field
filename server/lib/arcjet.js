const arcjet = require("@arcjet/node").default;
const { shield, detectBot, tokenBucket } = require("@arcjet/node");
require("dotenv/config");

const aj = arcjet({
    token: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        shield({
            mode: "LIVE",
        }),
        detectBot({
            mode: "LIVE",
            allow: [
                "CATEGORY:SEARCH_ENGINE"
            ],
        }),
        tokenBucket({
            mode: "LIVE",
            capacity: 10,
            refillRate: 5,
            interval: 10,
            onExceed: (req, res) => {
                res.status(429).json({ success: false, message: "Rate limit exceeded" });
            },
        }),
    ],
});

module.exports = { aj };