const express = require('express');
const mongoose = require('mongoose');
const app = express(),
    　bodyParser = require("body-parser");　
port = 3080;
const db = mongoose.connect('mongodb://localhost/productsAPI');
const Products = require('./models/productsModel');
// const productsController = require('./controllers/productsController');

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/smoke-effect/dist/smoke-effect"));
app.use(bodyParser.urlencoded({ extended: true }));

//GET
app.get('/api/products', (req, res) => {
    const query = {};
    if (req.query.id) {
        query.id = req.query.id;
    }
    console.log(req)
    Products.find(query, (err, products) => {
        if (err) {
            return res.send(err);
        } else {
            const returnProducts = products.map((product) => {
                const newProduct = product.toJSON();
                newProduct.links = {};
                newProduct.links.self = `http://${req.headers.host}/api/products/${product._id}`;
                return newProduct;
            });
            return res.json(returnProducts);
        }
    });
});

//POST
app.post('/api/products', (req, res) => {
    const product = new Products(req.body);

    product.save();
    console.log(product);
    return res.status(201).json(product);
});

//Middle ware
app.use('/api/products/:productId', (req, res, next) => {
    Products.findById(req.params.productId, (err, product) => {
        if (err) {
            return res.send(err);
        }
        if (product) {
            req.product = product;
            return next();
        }
        return res.sendStatus(404);
    });
})

//GET
app.get('/api/products/:productId', (req, res) => {
    res.json(req.product);
});

//PUT
app.put('/api/products/:productId', (req, res) => {
    const { product } = req;
    product.name = req.body.name;
    product.price = req.body.price;
    product.stock = req.body.stock;
    product.section = req.body.section;
    product.imageUrl = req.body.imageUrl;
    product.brandName = req.body.brandName;
    product.type = req.body.type;
    product.origin = req.body.origin;
    product.evaluation = req.body.evaluation;
    product.condition = req.body.condition;
    product.strength = req.body.strength;
    product.want = req.body.want;
    product.sold = req.body.sold;
    req.product.save((err) => {
        if (err) {
            return res.send(err);
        }
        return res.json(product);
    });
});

//PATCH
app.patch('/api/products/:productId', (req, res) => {
    const { product } = req;

    if (req.body._id) {
        delete req.body._id;
    }
    Object.entries(req.body).forEach(item => {
        console.log(item)
        const key = item[0];
        const value = item[1];
        product[key] = value;
    });
    req.product.save((err) => {
        if (err) {
            return res.send(err);
        }
        return res.json(product);
    });
});

//DELETE
app.delete('/api/products/:productId', (req, res) => {
    req.product.remove((err) => {
        if (err) {
            return res.send(err);
        }
        return res.sendStatus(204);
    });
});

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/smoke-effect/dist/smoke-effect/index.html");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});