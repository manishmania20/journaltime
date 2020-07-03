const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const basicRoutes = require('./routes/basicRoutes.js')


//creating the express app

const app = express()

//MongoDB Atlas & Mongoose
const dbURI = 'mongodb+srv://manish:Starwhite654@journaltime.k8ufs.mongodb.net/JournalTime?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true })
    .then((result) =>  app.listen(3000))
    .catch((error) => console.log(error))
 
//view engine

app.set('view engine','ejs')
app.set('views','view')


 //static css file
 app.use(express.static('public'))

 //to pass the new blog form data to request object
 app.use(express.urlencoded({ extended:true }))

 //morgan logger(middleware)
 app.use(morgan('dev'))

 //making requests
 //express does not take relative path and rather uses absolute path

 
 //home
 app.get('/',(req,res) => {
    res.redirect('/journals')
 })

 
//about
 app.get('/about',(req,res) => {
    //res.send('<h1>About page</h1>')
    res.render('about',{title: 'About'})
})

//contact
app.get('/contact',(req,res) => {
    //res.send('<h1>Contact page</h1>')
    res.render('contact',{title: 'Contact'})
})

//blog routes
app.use('/journals',basicRoutes)



//error page or url not found
app.use((req,res) => {
    res.status(404).render('error',{title: 'Not Found'})
})