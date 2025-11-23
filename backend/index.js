// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

let products = []; // Temporary in-memory store

// Routes
app.get('/',(req,res)=>{
    res.send("server get data")
})
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const product = { id: Date.now(), ...req.body };
  products.push(product);
  res.status(201).json({ message: 'Product added', product });
});

app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: 'Product deleted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
