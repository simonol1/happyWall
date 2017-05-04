var express = require('express')
var posts= require ('./data.json')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('Happy Wall')
})

//post
router.get('/', (req, res) => {
  res.render ('')
})

//form



module.exports = router
