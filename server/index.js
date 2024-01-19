import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()


app.listen(2002, ()=> console.log(`SERVER IS UP`))