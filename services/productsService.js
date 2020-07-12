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
            return res.json(products);
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

app.get('/api/products', (req, res) => {
    Products.find(req.body.product, (err, product) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(product);
        }
    });
});