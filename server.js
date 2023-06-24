import express from 'express'
import { PORT } from './config'
import cors from 'cors'
import CrudRoute from './routes/CrudRoute'
import connectDB from './db/db'

connectDB()
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api",CrudRoute)


app.listen(PORT,() =>{
console.log(`server is running ${PORT}`);
})