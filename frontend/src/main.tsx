import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import  NavBar  from './components/Navbar'
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
      <ul>
        {questions.map((question)=>(
          <li>{question.question}</li>
        ))}
      </ul> 
    </>
  )
} 


root.render(
  <StrictMode>
    <Test/>
    <NavBar />
  </StrictMode>
)
