const express = require('express')
const cors = require('cors');
require('dotenv').config()


const app = express()
const port = process.env.PORT || 4000

// mid ware 
app.use(cors())
app.use(express.json())