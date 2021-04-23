import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true,}));

const routes = require('./routes/emp')

app.use('/emp', routes)

app.get('/', (req, res) => res.send('Welcome'))

const connectDB = async () => {

  try{

    await mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex:true})

    console.log('Connected Successfully!')

  } 
  
  catch(err){

    console.log('Connection Fail!')

  }

}

connectDB()

app.listen(8000, () => console.log('Server Running...'))

exports.default = app