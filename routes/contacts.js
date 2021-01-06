const express = require('express')
const router = express.Router()

// @route     GET api/users
// @desc      Register a user  
// @access    Publix

router.get('/', (req, res) => {
    res.send('Get all contact')
})
// @route     Post api/users
// @desc      Register a user  
// @access    Publix

router.post('/', (req, res) => {
    res.send('Add contact')
})

router.put('/:id', (req, res) => {
    res.send('Update contact')
})

router.delete('/:id', (req, res) => {
    res.send('Delete contact')
})

module.exports = router