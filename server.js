const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 3000;
const masterRoute = require('./route/routes');

app.use(express.json());
app.use(cors({
    origin: '*', // Atau ganti dengan asal spesifik seperti 'http://localhost:8080'
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api', masterRoute);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get('/', (req, res) => res.send('File tersedia di folder uploads!'));

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}!`);
});
