
import NavBar from './NavBar.jsx';
import analyticsHomePage from '../src/assets/analyticsHomePage.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pdfHomePage from '../src/assets/pdfHomePage.png';
import supportHomePage from '../src/assets/supportHomePage.png';
import Collaboration from './Collaboration.jsx';



export default function PortalExample() {
  return (
    <>
    {/* Background Color:oklch(0.141_0.005_285.823)
    Text Color:oklch(0.359_0.144_278.697) */}

      <NavBar/>

      <div className="flex items-center justify-center h-50 bg-[oklch(0.141_0.005_285.823)]">
        <div className="flex items-center justify-center bg-black-100 p-3 rounded-lg hover:text-blue-500">
          <h2 className="w-38 py-2 px-2 border-double text-xl text-white border-5 rounded-lg border-blue-500">Take ACE Quiz</h2>
        </div>
      </div>
      
  <div className="bg-[oklch(0.141_0.005_285.823)] w-full flex space-x items-center justify-center">
    <CardGroup className="gap-4 flex space-x mt-10">  
    <Card style={{ width: '18rem' }} className='mr-20'>
      <Card.Img src={analyticsHomePage} alt="Analytics Home Page" className="h-36 w-72 rounded-lg" />
      <Card.Body>
        <Card.Title className="text-xl text-gray-400 ml-1">Analytics</Card.Title>
        <Card.Text className="text-md text-white ml-1"> 
          View your performances and track your progress.
        </Card.Text>
        <Button variant="dark" className="ml-16 text-blue-500 items-center justify-center mt-2 mb-2">Go Analytics</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted ml-2">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card style={{ width: '18rem' }} className='mr-20 '>
    <Card.Img src={pdfHomePage} alt="Analytics Home Page" className="h-32 w-39 flex ml-16" />
    <Card.Body>
    <Card.Title className="text-xl text-gray-400 mt-4">Review Questions</Card.Title>
    <Card.Text className="text-md text-white ml-1">
          Don't want to take a Quiz? Just want to review the questions we got you.
        </Card.Text>
        <Button variant="dark" className="ml-18 text-blue-500 items-center justify-center mt-2 mb-2">Go Questions</Button>
      </Card.Body>
      <Card.Footer className='mb-2'>
      <small className="text-muted ml-2">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img src={supportHomePage} alt="Analytics Home Page" className="h-32 w-34 ml-15" />
    <Card.Body>
    <Card.Title className="text-xl text-gray-400 mt-4">Submit a feature request</Card.Title>
    <Card.Text className="text-md text-white ml-1">
          Didn't find what you were looking for? Submit a feature request.
        </Card.Text>
        <Button variant="dark" className="ml-16 text-blue-500  items-center justify-center mt-2 mb-2">Go Requests</Button>
      </Card.Body>
      <Card.Footer className='mb-10'>
      <small className="text-muted ml-2">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>

    <Collaboration/>

    </>
  );
}
