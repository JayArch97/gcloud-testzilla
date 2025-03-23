import NavBar from "./NavBar"
import { MDBContainer, MDBRadio, MDBRow } from 'mdb-react-ui-kit';
import { useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

export default function QuizPage() {


    const [questions, setQuestions] = useState([]);
    const [formData, setFormData] = useState({ quantity: '', answers: '' }); // State to hold form data
  
    useEffect(() => {
      getQuestions().then((data) => setQuestions(data));
    }, []);

    const getQuestions = () => {
      return axios
        .get('https://acostajulio-dev.wl.r.appspot.com')
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            let test  = response.data[i].q_id
            // first extraction
            console.log(test)
            // console.log(test.match(/\:\s([A-Z])/g).join("").match(/[A-Z]/g))
          }
          
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
  
    const handleInputChange = (event) => {
      // Update form data as input changes
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const submit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("https://acostajulio-dev.wl.r.appspot.com/scores", {
          quantity: formData.quantity, 
          answers: formData.answers, 
        });
          console.log("Data submitted successfully", response.data); 
      } catch (error) {
          console.error("Error submitting data:", error);
          if (error.response) {
              console.error('Server responded with:', error.response.data);
          }
      }
    };

      

  
    return (
      <>
      < NavBar/>
         <form onSubmit={submit}> 
          <label>
            Backend Verification:
            <input
              type="number"
              name="quantity"
              value={formData.quantity} 
              onChange={handleInputChange} 
              className="ml-10 mt-10 mb-10 "
            />
            <input
              type="number"
              name="answers"
              value={formData.answers} 
              onChange={handleInputChange} 
            />
          </label>
          <button type="submit" className="text-black"
          >Submit</button> 
        </form>
  
  
        <MDBContainer>
          <MDBRow className="justify-content-center border-solid">
            <form action="POST">
              {questions.map((question, index) => (
                <div key={index} className="border border-primary p-3 m-3">
                  <p>{question.questions}</p>
                  <MDBRadio
                    name={`flexRadioDefault-${index}`}
                    id={`flexRadioDefault1-${index}`}
                    label={question.opt_a}
                    className='mb-2 mt-2 ml-2 mr-2'
                  />
                  <MDBRadio
                    name={`flexRadioDefault-${index}`}
                    id={`flexRadioDefault2-${index}`}
                    label={question.opt_b}
                    className='mb-2 mt-2 ml-2 mr-2'
                  />
                  <MDBRadio
                    name={`flexRadioDefault-${index}`}
                    id={`flexRadioDefault3-${index}`}
                    label={question.opt_c}
                    className='mb-2 mt-2 ml-2 mr-2'
                  />
                  <MDBRadio
                    name={`flexRadioDefault-${index}`}
                    id={`flexRadioDefault4-${index}`}
                    label={question.opt_d}
                    className='mb-2 mt-2 ml-2 mr-2'
                  />
                </div>
              ))}
            </form>
          </MDBRow>
  
          <input type="submit" value="submit" className="btn btn-primary" onClick={submit} />
        </MDBContainer>
      </>
    );
  
}

