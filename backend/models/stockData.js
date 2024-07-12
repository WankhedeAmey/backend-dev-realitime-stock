const mongoose = require("mongoose");

const stockDataSchema = new mongoose.Schema({
    symbol: String,
    price: Number,
    timestamp: { type: Date, default: Date.now },
});

const StockData = mongoose.model("StockData", stockDataSchema);

module.exports = StockData;
