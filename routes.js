var express = require('express')
var posts= require ('./data.json')
var router = express.Router()

router.get('/', (req, res) => {
  res.send('Happy Wall')
})


router.get('/', (req, res) => {
  res.render('post', posts)
})

router.get('/', (req, res) => {
  res.render('form', posts)
})



module.exports = router
