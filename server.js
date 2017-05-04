var express= require ('express')
var hbs= require ('express-handlebars')

var routes= require ('./routes')

var app =express()

app.use('/', routes)

module.exports = app
