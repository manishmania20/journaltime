const express = require('express')
const basicController = require('../controllers/basicControllers.js')

const router = express.Router()



//journal viewer
router.get('/', basicController.journal_home)

//post request for new blog
router.post('/', basicController.journal_create_post)

//create journal
router.get('/create', basicController.journal_create_get)


//handling individual journal details
router.get('/:id', basicController.journal_details)

//delete journal
router.delete('/:id', basicController.journal_delete)

module.exports = router