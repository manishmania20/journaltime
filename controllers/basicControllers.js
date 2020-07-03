//journal_home, journal_details, journal_create_get, journal_create_post, journal_delete

const Journal = require('../model/journals.js')

const journal_home = ((req, res) => {
    //sort in descending order according to time of creation
    Journal.find().sort( {createdAt: -1} )
       .then((result) => {
           res.render('journals/home', {title: 'My journals', journals: result})
       })
       .catch((error) => {
           console.log(error)
       })
})

const journal_details = ((req, res) => {
    const id = req.params.id
    Journal.findById(id)
        .then((result) => {
            res.render('journals/details', {title: 'More Details', journal: result})
        })
        .catch((error) => {
            res.render('error',{title: 'Not Found'})
        })
})


const journal_create_get = ((req, res) => {
     //res.send('<h1>About page</h1>')
     res.render('journals/create',{title: 'New'})
})

const journal_create_post = ((req, res) => {
    const journal = new Journal(req.body)
//committing the journal
   journal.save()
       .then((result) => {
           res.redirect('/journals')
       })
       .catch((error) => {
           console.log(error)
       })
})

const journal_delete = ((req, res) => {
    const id = req.params.id
    Journal.findByIdAndDelete(id)
        .then((result) => {
            res.json({redirect: '/journals'})
        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = {
    journal_home,
     journal_details,
      journal_create_get,
       journal_create_post, 
        journal_delete
}