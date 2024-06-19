const express = require('express')
const cors = require('cors');
const { connectToServer } = require('./Utils/DBConnect');
const votarList = require('./Routes/V1/VotarList.route');
require('dotenv').config()


const app = express()
const port = process.env.PORT || 4000

// mid ware 
app.use(cors())
app.use(express.json())


connectToServer((err)=>{
    if(!err){
        app.listen(port, ()=> {
            console.log( 'Server running', port);
        })
    } else {
        console.log(err);
    }
})


// Route list
app.use('/api/v1/votarList', votarList)



app.get('/', (req, res) => {
    res.send('Server Running')
})

app.all("*", (req, res) => {
    res.send('No API Found')
})

process.on("unhandledRejection", (error) =>{
    console.log(error.name, error.message);
    app.close(()=>{
        process.exit(1)
    })
})