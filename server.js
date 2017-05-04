var express= require ('express')
var hbs= require ('express-handlebars')
var data= require ('./data.json')
var routes= require ('./routes')

var app =express()

app.use(express.static('./public'))

app.use('/', routes)

module.exports = app
