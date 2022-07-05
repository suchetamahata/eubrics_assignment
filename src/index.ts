import { authentication } from "./authentication";
import { nameRouter } from "./routes/Router"
import { userRouter } from "./routes/userRoutes";
import { taskRouter } from "./routes/taskRoutes"
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import path from 'path'


const app = express()
app.use(express.json())
app.use(cors())
app.use('/', userRouter)
app.use('/get-behaviours', nameRouter)
app.use('/task', authentication, taskRouter)
app.use(express.static(path.join(__dirname, './build')))


app.listen(10000, () => console.log("app listening on port 4040"))

mongoose.connect("mongodb+srv://sucheta:moonstar*@cluster0.uolwybx.mongodb.net/eubrics_data?retryWrites=true&w=majority" || '', (err: any) => {
  if (err) {
    console.log('Cant connect db')
  } else {
    console.log('Connected to db')
  }
})

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
})