const express = require('express')
const app = express ()
require('./database/connection')
app.get('/',(req,res)=>{
  res.send('<h1> Hello world </h1>')
})

const PORT= 4000  
app.listen(PORT,()=>{
  console.log(`Project has successfully started at ${PORT}`)
}) 