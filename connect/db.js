 const mongoose = require("mongoose")
 

 const connect = () => {
    // console.log(process.env.MONGO_URL);
    return mongoose.connect(process.env.MONGO_URL,{

        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
 }
 module.exports = connect
