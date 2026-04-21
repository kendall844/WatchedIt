"use strict";
const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");

app.use(cors());
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const showRoutes = require('./routes/showRoutes');

app.use('/api/shows', showRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server listening on port: " + PORT + "!");
});