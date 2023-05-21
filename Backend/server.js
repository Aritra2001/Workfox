require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const login = require('./models/loginModels')

//express app
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST')
    }

    next()
})


//post request
app.post('/workfox/register', async(req, res) => {
    const {firstname, middlename, lastname, email, contact, brandname} = req.body

    try {
        const Login = await login.create({firstname, middlename, lastname, email, contact, brandname})
        res.status(200).json(Login)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on', process.env.PORT)
    })
})
.catch((err) => {
    console.log(err)
})