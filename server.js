const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

let products = [
    {
        id: 1,
        name: 'Dunhil charch warden',
        price: 288.00,
        section: 'pipe',
        imageUrl: 'assets/images/samplePipe.jpg',
        brandName: 'Dunhil',
        type: 'Charch warden',
        stock: 10,
        origin: 'denmark',
        evaluation: 10,
        condition: 5,
        strength: null,
        want: 554,
        sold: 146,
      },
      {
        id: 2,
        name: 'Tuge hand made',
        price: 488.00,
        section: 'pipe',
        imageUrl: 'assets/images/samplePipe2.jpg',
        brandName: 'tuge',
        type: 'billiard',
        stock: 5,
        origin: 'canada',
        evaluation: 9,
        condition: 5,
        strength: null,
        want: 576,
        sold: 498
      },
      {
        id: 3,
        name: 'high chimney',
        price: 188.00,
        section: 'cigar',
        imageUrl: 'assets/images/samplePipe3.jpg',
        brandName: 'tuge',
        type: 'chimney',
        stock: 5,
        origin: 'canada',
        evaluation: 7,
        condition: 5,
        strength: null,
        want: 543,
        sold: 389
      },
      {
        id: 4,
        name: 'basic hand made',
        price: 128.00,
        section: 'cigar',
        imageUrl: 'assets/images/samplePipe4.jpg',
        brandName: 'tuge',
        type: 'basic',
        stock: 5,
        origin: 'canada',
        evaluation: 9,
        condition: 5,
        strength: null,
        want: 534,
        sold: 1200
      },
      {
        id: 5,
        name: 'Coral',
        price: 148.00,
        section: 'pipe',
        imageUrl: 'assets/images/samplePipe5.jpg',
        brandName: 'tuge',
        type: 'coral',
        stock: 5,
        origin: 'canada',
        evaluation: 6,
        condition: 5,
        strength: null,
        want: 513,
        sold: 3891
      },
      {
        id: 6,
        name: 'Arama',
        price: 20.00,
        section: 'happa',
        imageUrl: 'assets/images/can.jpg',
        brandName: 'dunhil',
        type: 'coral',
        stock: 5,
        origin: 'canada',
        evaluation: 10,
        condition: 5,
        strength:9,
        want: 621,
        sold: 3893
      },
      {
        id: 7,
        name: 'White Vanila',
        price: 30.00,
        section: 'happa',
        imageUrl: 'assets/images/kusa.jpg',
        brandName: 'dunhil',
        type: 'coral',
        stock: 5,
        origin: 'canada',
        evaluation: 5,
        condition: 5,
        strength:6,
        want: 376,
        sold: 1980
      }
];

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/smoke-effect/dist/smoke-effect"));

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/', (req, res) => {
    res.sendFile(process.cwd()+"/smoke-effect/dist/smoke-effect/index.html");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
