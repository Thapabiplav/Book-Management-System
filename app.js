const express = require('express')
const { books } = require('./database/connection')
const app = express ()

require('./database/connection')
app.use(express.json())  

app.get('/books',async (req,res)=>{
 const data= await books.findAll()
 res.status(200).json({
  message:'Book fetched successfully',
  data
 })
})

app.post('/books',async(req,res)=>{
  const {bookName,bookAuthor,bookPrice,bookGenre}=req.body  
  if(!bookName || !bookName  || !bookAuthor || !bookGenre || !bookPrice ){
     return res.status(400).json({
      message:"Please provide the field"
    })
  }
  await books.create({
    bookName,   
    bookPrice,
    bookAuthor,
    bookGenre
  })
  
  res.status(201).json({
    message:'book added successfully'
  })
})

const PORT= 4000  
app.listen(PORT,()=>{
  console.log(`Project has successfully started at ${PORT}`)
}) 