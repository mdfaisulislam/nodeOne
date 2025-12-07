const express = require('express')
const app = express()

app.listen(3000, ()=> {
    console.log(`Successfully Connected.`);
});

app.get('/', (req, res) => {
    res.send("<h1>Welcome, Ali</h1>");
});

app.get('/order', (req, res) => {
    res.send("<h1>Order</h1>");
});
// one parameter in rout
app.get('/store/:id', (req, res) => {
    // res.send("<h1>Store</h1>");
    res.send(req.params.id);
});
// two parameter in rout
app.get('/book/:name-:id', (req, res) => {
    // res.send("<h1>Store</h1>");
    res.send(req.params);
});

app.get('/hire', (req, res) => {
    res.send("<h1>Hire</h1>");
});