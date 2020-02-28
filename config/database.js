const mongoose = require('mongoose')

// mongoose connection configuration
const setupDB = ()=>{
    mongoose.connect('mongodb://localhost:27017/shopping-app',{ useNewUrlParser: true ,useUnifiedTopology: true })
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log('Error',err)
    })
}

module.exports = setupDB