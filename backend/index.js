const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dataRoutes = require("./routes/data");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://wankhedeameyb:admin123@cluster0.kbirj.mongodb.net/stockData");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

app.use("/api", dataRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
