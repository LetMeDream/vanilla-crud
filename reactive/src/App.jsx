import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container } from 'react-bootstrap'
import AddProduct from './components/Sections/AddProduct/AddProduct';
import EditProduct from './components/Sections/EditProduct/EditProduct';
import DeleteProduct from './components/Sections/DeleteProduct/DeleteProduct';

function App() {

  return (
    <div className='main'>
      <h1 className='app-title'>
        Shopping Car
      </h1>
      <Container>
        <Row>
          <AddProduct xs={12} md={6} lg={4}/>
          <EditProduct xs={12} md={6} lg={4}/>
          <DeleteProduct
            xs={12} md={12} lg={4} 
            classnames='mt-md-4 mt-lg-0'
          />
        </Row>

      </Container>
    </div>
  )
}

export default App
