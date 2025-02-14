import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import  ComplexNavbar  from './components/Navbar'
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import './index.css'

const root = createRoot(document.getElementById('root')!)



function Test(){
  const [questions, setQuestions] = useState<{ question: string }[]>([])

  useEffect(() => {
    getQuestions().then(data=> setQuestions(data))
  }, [])

  const getQuestions =  () => {
    return axios.get('http://localhost:3000/questions').then(response => {
      console.log(response.data)
      return response.data
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <>
    <Form>
      <ul>
        {questions.map((question)=>(
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>{question.question}</Form.Label>
         <Form.Control type="email" placeholder="Enter email" />
         </Form.Group>
        ))}
      </ul> 
      </Form>
    </>
  )
} 


root.render(
  <StrictMode>
    <ComplexNavbar />
    <Test />
  </StrictMode>
)
