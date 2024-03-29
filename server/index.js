import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './config/dbConnect.mjs'
import helmet from 'helmet'
import morgan from 'morgan'
import clientRoute from './routes/client.js'
import generalRoute from "./routes/general.js"
import managmentRoute from './routes/management.js'
import salesRoute from './routes/sales.js'
import Product from './model/Product.js'
import ProductStat from './model/ProductStat.js'
import Transaction from './model/Transaction.js'
import OverallStat from './model/OverallStat.js'
import { dataProduct, dataProductStat, dataTransaction, dataOverallStat } from './data/index.js'
config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"))
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res)=>{
    res.json('Hello Motherfucker')
})
app.use('/client', clientRoute)
app.use('/general', generalRoute)
app.use('/managment', managmentRoute)
app.use('/sales', salesRoute)

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`Server is listening on port ${PORT}`)
        })
        /*
        adding all the user data make sure to do it only once
        //User.insertMany(dataUser)
         Product.insertMany(dataProduct)
       ProductStat.insertMany(dataProductStat)
        Transaction.insertMany(dataTransaction)
         OverallStat.insertMany(dataOverallStat)
        */     
    }
    catch(error){
        console.log(error.message)
    }
   
}
start()