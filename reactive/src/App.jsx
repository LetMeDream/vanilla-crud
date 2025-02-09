import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container } from 'react-bootstrap'
import Card from './components/Card/Card';


function App() {

  return (
      <Container>
        <Row>
          <Card></Card>
          <Card></Card>
        </Row>
        <Row className='mt-2'>
          <Card></Card>
        </Row>
      </Container>
  )
}

export default App
