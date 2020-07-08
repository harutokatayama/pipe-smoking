const express = require('express');
const mongoose = require('mongoose');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
const db = mongoose.connect('mongodb://localhost/productsAPI');
const Products = require('./models/productsModel');

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/smoke-effect/dist/smoke-effect"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
    // const query = {};
    // if(req.query.section){
    //     query.section = req.query.section;
    // }
    // Products.find(query, (err, products) => {
    //     if (err) {
    //         return res.send(err);
    //     } else {
    //         console.log(products)
    //         return res.json(products);
    //     }
    // });
});

app.post('/api/products', (req, res) => {
    const product = new Products(req.body);

    console.log(product)
    product.save();
    return res.status(201).json(product);
});

app.use('/api/products/:id', (req, res, next) => {
    Products.findById(req.params.id, (err, product) => {
        if (err) {
            return res.send(err);
        }
        if (product) {
            req.product = product;
            return next();
        }
        return res.sendStatus(404);
    });
});

app.get('/api/products/:id', (req, res) => {
    // Products.findById(req.params.id, (err, product) => {
    //     if (err) {
    //         return res.send(err);
    //     } else {
    //         console.log(product)
    //         return res.json(product);
    //     }
    // });
    res.json(req.product);
});

app.put('/api/products/:id', (req, res) => {
    // Products.findById(req.params.id, (err, product) => {
    //     if (err) {
    //         return res.send(err);
    //     } else {
    //         console.log(product);
    //         //product.name = res.name 
    //         product.save();
    //         return res.json(product);
    //     }
    // });
    const { product } = req;
    //product.name = res.name;
    product.save();
    return res.json(product);
});

app.patch('/api/products/:id', (req, res) => {
    const { product } = req;

    if (req.body._id) {
        delete req.body._id;
    }
    Object.entries(req.body).filter(item => {
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

app.delete('/api/products/:id', (req, res) => {
    req.book.remove((err) => {
        if (err) {
            return res.send(err);
        }
        return res.sendStatus(204);
    })
});

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/smoke-effect/dist/smoke-effect/index.html");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
