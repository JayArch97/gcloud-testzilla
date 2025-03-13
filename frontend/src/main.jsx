import { useEffect, useState,ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import './index.css'


const root = createRoot(document.getElementById('root'))


function Test(){
  const [questions, setQuestions] = useState<{
    opt_a: ReactNode,
    opt_b: ReactNode,
    opt_c: ReactNode,
    opt_d: ReactNode, questions: string 
}[]>([])


  useEffect(() => {
    getQuestions().then(data=> setQuestions(data))
  }, [])

  const getQuestions =  () => {
    return axios.get('https://acostajulio-dev.wl.r.appspot.com').then(response => {
      console.log(response.data)
      return response.data
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <>
  <MDBContainer>
  <MDBRow className="justify-content-center">
      <form>
        {questions.map((question)=>(
        <>
            <p> {question.questions}</p>
            <MDBRadio
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      label={question.opt_a}
                      defaultChecked
            />
                 <MDBRadio
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      label={question.opt_b}
            />
                 <MDBRadio
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      label={question.opt_c}
            />
                 <MDBRadio
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      label={question.opt_d}
            />
            <Form.Group className="mb-3" controlId="formBasicEmail">
          </Form.Group>
        </>
        ))}
    </form>
      </MDBRow>
      </MDBContainer>
    </>
  )
} 


root.render(
  <>
    <Test />
  </>
)