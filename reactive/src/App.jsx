import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container } from 'react-bootstrap'
import AddProduct from './components/Sections/AddProduct/AddProduct';
import EditProduct from './components/Sections/EditProduct/EditProduct';
import DeleteProduct from './components/Sections/DeleteProduct/DeleteProduct';

function App() {

  return (
      <Container>
        <Row>
          <AddProduct />
          <EditProduct />
        </Row>
        <Row className='mt-2'>
          <DeleteProduct />
        </Row>
      </Container>
  )
}

export default App
