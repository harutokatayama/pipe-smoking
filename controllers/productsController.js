const Products = require('../models/productsModel');
class productsController {
    function get() {
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
    };

    post() {
        app.post('/api/products', (req, res) => {
            const product = new Products(req.body);

            product.save();
            console.log(product);
            return res.status(201).json(product);
        });
    };
}

export default productsController;