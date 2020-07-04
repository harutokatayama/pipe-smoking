const express = require('express');
const mongoose = require('mongoose');
const app = express(),
    bodyParser = require("body-parser");
port = 3080;
const db = mongoose.connect('mongodb://localhost/productsAPI');
const Products = require('./models/productsModel');

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/smoke-effect/dist/smoke-effect"));

app.get('/api/products', (req, res) => {
    Products.find((err, products) => {
        if (err) {
            return res.send(err);
        } else {
            console.log(products)
            return res.json(products);
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/smoke-effect/dist/smoke-effect/index.html");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});