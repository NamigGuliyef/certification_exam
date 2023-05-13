import { connect } from 'mongoose'
import express from 'express'
import userRouter from './routes/user.route.js'

connect("mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority")

const app = express()

app.use(express.json())

app.use('/user', userRouter)

app.listen(5050, () => console.log('server is up ...'))