const express =require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());



app.get('/',(req,res)=>{
    res.send('Shoe savant server is Running');
});
app.listen(port,()=>{
    console.log(`Shoe savant server is running on port ${port}`);
});