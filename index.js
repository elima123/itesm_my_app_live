const express = require('express');
const mongoose = require('mongoose'); // Corrected the spelling of mongoose
const jest = require('jest');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!"); // Removed unnecessary parentheses
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
