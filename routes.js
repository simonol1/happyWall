var express = require('express')
var router = express.Router()

var fs = require('fs')

var posts = require('./data.json')

var viewData = {
  posts: posts
}


router.get('/', (req, res) => {
  res.render('post', viewData)
})

// router.get('/', (req, res) => {
//   res.render('form', posts)
// })

router.post('/addMessage', (req, res) => {
  console.log(req.body);
  newMessage = {

    message:
  }

  posts.push(
  fs.writeFile(__dirname + '/data.json', JSON.stringify(posts), (err) => {
    res.redirect('/')
  })
})

module.exports = router
