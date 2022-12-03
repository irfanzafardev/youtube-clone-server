import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import commentRoutes from './routes/comments.js'

const app = express()
dotenv.config()
const connect = () => {
  mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to database!')
  }).catch(err => {
    throw err
  })
}

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)

app.listen(8080, () => {
  connect()
  console.log("connected to server!")
})
