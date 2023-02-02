const mongoose = require('mongoose');
require('colors');
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
           console.log(`Mongodb DataBase Connected! ${conn.connection.host}`.bgCyan.white)
    }
    catch (error) {
        console.log(`error: ${error.message}`.bgRed.black)
    }
}

module.exports = connectDB