const express = require("express");
const axios = require("axios");
const StockData = require("../models/stockData");
const router = express.Router();

const symbols = ["bitcoin", "ethereum", "ripple", "litecoin", "chainlink"];

async function fetchData() {
    for (const symbol of symbols) {
        try {
            const response = await axios.get(
                `https://api.coingecko.com/api/v3/simple/price`,
                {
                    params: {
                        ids: symbol,
                        vs_currencies: "usd",
                    },
                }
            );

            // Check if the response contains the expected data structure
            if (response.data && response.data[symbol]) {
                const price = response.data[symbol].usd;
                const stockData = new StockData({
                    symbol,
                    price,
                    timestamp: new Date().toISOString(),
                });

                await stockData.save();
            } else {
                console.error(
                    `Error fetching data for ${symbol}: Invalid response structure`,
                    response.data
                );
            }
        } catch (error) {
            console.error(`Error fetching data for ${symbol}:`, error);
        }
    }
}

setInterval(fetchData, 5000);

router.get("/data/:symbol", async (req, res) => {
    const symbol = req.params.symbol;
    const data = await StockData.find({ symbol })
        .sort({ timestamp: -1 })
        .limit(20);
    res.json(data);
});

module.exports = router;
