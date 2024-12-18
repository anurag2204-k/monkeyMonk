import express from 'express'

const app = express()
app.get('/api',(req,res)=>{
    console.log('Hello')
    res.json({ message: 'Hello' })
    res.send('Hello')
    res.status(200)
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})