const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wornderbnb"

main()
  .then(() => {
    console.log("Connected to MongoDB");
})
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/" ,(req,res) => {
    res.send("Hlo i am root")
});

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "A beautiful villa with stunning views.",
        price: 1200,
        location: "Calangute, Goa",
        country: "India",
    })

    await sampleListing.save();
    res.send("Sample listing created!");
    console.log("Sample listing created and saved to the database.");

});


app.listen(8080,() => {
    console.log("connected to server");
});