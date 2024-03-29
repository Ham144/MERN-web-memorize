import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import postRoutes from './routes/post.js'

const app = express()
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/posts', postRoutes)
 
const CONNECTION_URL = 'mongodb+srv://hambebe:hambebe144@cluster0.invxt05.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
.then(()=>{app.listen(PORT, ()=>console.log(`server is running on ${PORT}`))})
.catch((error)=> console.log(error.message))
