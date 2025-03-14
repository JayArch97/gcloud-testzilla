import { useEffect, useState, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import './index.css';
import { MDBContainer, MDBRadio, MDBRow } from 'mdb-react-ui-kit';

const root = createRoot(document.getElementById('root'));

function Test() {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({ quantity: '', answers: '' }); // State to hold form data

  useEffect(() => {
    getQuestions().then((data) => setQuestions(data));
  }, []);

  const getQuestions = () => {
    return axios
      .get('https://acostajulio-dev.wl.r.appspot.com/questions/app')
      .then((response) => {
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
 <form onSubmit={submit}> 
        <label>
          Backend Verification:
          <input
            type="number"
            name="quantity"
            value={formData.quantity} 
            onChange={handleInputChange} 
          />
          <input
            type="number"
            name="answers"
            value={formData.answers} 
            onChange={handleInputChange} 
          />
        </label>
        <button type="submit">Submit</button> 
      </form>


      <MDBContainer>
        <MDBRow className="justify-content-center">
          <form action="POST">
            {questions.map((question, index) => (
              <div key={index}>
                <p>{question.questions}</p>
                <MDBRadio
                  name={`flexRadioDefault-${index}`}
                  id={`flexRadioDefault1-${index}`}
                  label={question.opt_a}
                />
                <MDBRadio
                  name={`flexRadioDefault-${index}`}
                  id={`flexRadioDefault2-${index}`}
                  label={question.opt_b}
                />
                <MDBRadio
                  name={`flexRadioDefault-${index}`}
                  id={`flexRadioDefault3-${index}`}
                  label={question.opt_c}
                />
                <MDBRadio
                  name={`flexRadioDefault-${index}`}
                  id={`flexRadioDefault4-${index}`}
                  label={question.opt_d}
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

root.render(
  <>
    <Test />
  </>
);