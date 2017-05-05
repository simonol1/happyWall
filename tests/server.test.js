var test = require('tape')
var request = ('supertest')
var server = require('./server.test.js')
var cheerio = require('cheerio')


test('Check if the title is diplaying correctly',(t)=>{
  request(app)
  .get('/')
  .end((err,res) => {
  var $ = cheerio.load(res.text)
    t.equal($(.handwritten).text(),'Happy Wall','The title is displaying correctly')
    t.end()
    console.log(test);
  })
})

test('Check if the img and positive affirmation match',(t)=>{
  request(app)
  .get('/')
  .end((err,res) => {
  var $ = cheerio.load(res.text)
    t.equal(res.test,,'The image and positive affirmation are matching')
    t.end()
  })
})


test('Check if the user can add their own image',(t)=>{
  request(app)
  .post('URLpath')
  .send({send path this})
  .end((err,res) => {
  var $ = cheerio.load(res.text)
    t.equal(res.test,'','The user can add their own image')
    t.end()
  })
})

test('Check if the user can add their own positive affirmation',(t)=>{
  request(app)
  .post('URLpath')
  .send({send path this})
  .end((err,res) => {
  var $ = cheerio.load(res.text)
    t.equal(res.test,'','The user can add their own positive affirmation')
    t.end()
  })
})
