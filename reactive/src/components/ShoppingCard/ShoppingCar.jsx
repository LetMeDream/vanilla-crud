import { Row, Container } from 'react-bootstrap'
import AddProduct from '../Sections/AddProduct';
import EditProduct from '../Sections/EditProduct';
import DeleteProduct from '../Sections/DeleteProduct';

const ShoppingCar = () => {
  return (
    <>
      <h1 className='shopping-car-title'>
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