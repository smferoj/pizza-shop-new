const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/config')
require('colors');
const morgan = require('morgan');
const router = require('./routes/pizzaRoute')



//config dotenv
dotenv.config()

// connection mongodb

connectDB()

const app = express()


// middlewares

app.use(express.json());
app.use(morgan('dev'))

// route

app.use('/api/pizzas', router) 

app.get('/', (req, res) => {
    res.send("<h1> Hello From node server</h1>")
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgGreen.white);
})

