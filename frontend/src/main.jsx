import { useEffect, useState, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import './index.css';
import { MDBContainer, MDBRadio, MDBRow } from 'mdb-react-ui-kit';

const root = createRoot(document.getElementById('root'));

function Test() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then((data) => setQuestions(data));
  }, []);

  const getQuestions = () => {
    return axios
      .get('https://acostajulio-dev.wl.r.appspot.com')
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <form>
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
      </MDBContainer>
    </>
  );
}

root.render(
  <>
    <Test />
  </>
);