// Import
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

// Instance
const app = express();
const port = 5000;
const textBodyParser = bodyParser.text({
    limit: '20mb', 
    defaultCharset: 'utf-8'
});



app.use(cors({
    origin: 'http://localhost:5173'
}));


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Custom Header
app.options('/', (req,res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Methods', 'PUT');

    res.sendStatus(200);
});


// Listen
app.listen(port, (err)=>{
    if(err) {
        console.log('There was a problem: ', err);
        return;
    }
    console.log(`Server listening on http://localhost:${port}`);
});


// app.get('/data/products', async (req, res) => {
//     try {
//       const productsData = await fs.promises.readFile('./data/products.json');
//       const products = JSON.parse(productsData);
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       res.json(products);
//     } catch (error) {
//       console.error('Error loading todos:', error);
//       res.status(500).json({ error: 'Error loading todos' });
//     }
// });

