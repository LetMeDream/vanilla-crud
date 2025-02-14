import { Row, Container } from 'react-bootstrap'
import AddProduct from '../Sections/AddProduct';
import EditProduct from '../Sections/EditProduct';
import DeleteProduct from '../Sections/DeleteProduct';
import PropTypes from 'prop-types';

const ShoppingCar = ({
  setProducts
}) => {
  return (
    <>
      <h1 className='shopping-car-title'>
        Shopping Car
      </h1>
      <Container>
        <Row>
          <AddProduct xs={12} md={6} lg={4}
            setProducts={setProducts}
          />
          <EditProduct xs={12} md={6} lg={4}
            classnames='mt-sm-4 mt-lg-0'
          />
          <DeleteProduct
            xs={12} md={12} lg={4} 
            classnames='mt-sm-4 mt-lg-0'
          />
        </Row>

      </Container>
    </>
  )
}

ShoppingCar.propTypes = {
  setProducts: PropTypes.array,
}

export default ShoppingCar