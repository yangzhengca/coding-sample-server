import express from 'express'
import bodyParser from 'body-parser'
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'
import vehicleRoutes from './routes/vehicles.js'


const app = express()
dotenv.config()


app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/vehicles',vehicleRoutes)

app.get('/',(req,res)=>{
    res.send('Welcome to FFUN sample API')
})

const PORT= process.env.PORT || 5000
const DB_URL=process.env.DB_URL

mongoose.connect(DB_URL,{ useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify',false)