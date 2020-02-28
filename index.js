const express = require('express')

const setupDB = require('./config/database')
const router = require('./config/routes')
const app = express()
const port = 3070

app.use(express.json())


setupDB()



app.get('/',(req,res) => {
   
    res.json({
        notice: 'welcome to Shopping API'
    })

})

app.use('/', router )// middleware use function

app.listen(port,()=>{
    console.log("Listening to port ", port)
})