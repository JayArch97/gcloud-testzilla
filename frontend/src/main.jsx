import './index.css';
import HomePage from '../components/HomePage';
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import QuizPage from '../components/QuizPage';


const root = createRoot(document.getElementById('root'));


root.render(
  <>
  <BrowserRouter>
  <HomePage />
  </BrowserRouter>
  </>
);