const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/wornderbnb"

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}
app.get("/" ,(req,res) => {
    res.send("Hlo i am root")
})

app.listen(8080,() => {
    console.log("connected to server");
})