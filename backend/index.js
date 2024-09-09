require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bookRoute = require('./routes/bookRoutes')
const userRoute = require('./routes/userRoutes')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3500
const mongoURI = process.env.MONGO_URI

app.use(express.json())
app.use(cors())

app.use('/api/books',bookRoute)
// app.use('/api/user',userRoute)

mongoose
    .connect(mongoURI)
    .then(()=>{
        console.log('Database connected')
        app.listen(port, () => console.log(`App running on port ${port}`))
    })
    .catch((error)=>{
        console.log(error)
    })


