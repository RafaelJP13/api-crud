const express  = require('express')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes/emp')

app.use('/emp', routes)

app.get('/', (req, res) => res.send('Welcome'))

mongoose.connect('mongodb://localhost/teste', {useNewUrlParser:true})
mongoose.connection.once('open', () => console.log('Database connected successfully!')).on('error', err => console.log(err))

app.listen(8000, () => console.log('Server Running...'))