var express = require('express')
var router = express.Router()

var fs = require('fs')

var posts= require ('./data.json')


router.get('/', (req, res) => {
  res.render('post', posts)
})

// router.get('/', (req, res) => {
//   res.render('form', posts)
// })



module.exports = router
