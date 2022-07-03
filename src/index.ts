import { nameRouter } from "./Router"
const mongoose = require("mongoose")
const express = require('express')
const cors = require('cors');


const app = express()
app.use(express.json())
app.use(cors())
app.use('/get-behaviours', nameRouter)

app.listen(4040, console.log("app lostening on port 4040"))

mongoose.connect("mongodb+srv://sucheta:moonstar*@cluster0.uolwybx.mongodb.net/eubrics_data?retryWrites=true&w=majority"|| '', (err: any) => {
    if (err) {
      console.log('Cant connect db')
    } else {
      console.log('Connected to db')
    }
  })