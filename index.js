var server= require('./server')
var PORT= process.env.PORT || 3000
server.listen (PORT,()=>{
  console.log('server is listening on port', PORT)
})
