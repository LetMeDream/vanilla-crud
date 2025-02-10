import { Row, Container } from 'react-bootstrap'
import AddProduct from '../../components/Sections/AddProduct/AddProduct';
import EditProduct from '../../components/Sections/EditProduct/EditProduct';
import DeleteProduct from '../../components/Sections/DeleteProduct/DeleteProduct';

const ShoppingCar = () => {
  return (
    <>
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
    </>
  )
}

export default ShoppingCar