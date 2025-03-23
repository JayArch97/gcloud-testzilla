import express from 'express';

const app = express()
app.use(express.json())
app.use(express.static('frontend/dist'))



// eslint-disable-next-line no-constant-binary-expression
app.listen( 8080 || 8000 , ()=>{
    console.log(`Listening on port ${8080}`)
})

