const mongoose = require("mongoose");
function connectDB() {
    mongoose.connect('mongodb+srv://rohitj:%40R1s2r3r4@cluster0.kddg7.mongodb.net/hiremywheels-new', {useUnifiedTopology: true, useNewUrlParser: true})
    const connection = mongoose.connection

    connection.on('connected', ()=>{
        console.log('Mongo DB Connection Successfull')
    })
    connection.on('error', ()=> {
        console.log('Mongo DB Connection Error')

    })

}

connectDB();

module.exports = mongoose
