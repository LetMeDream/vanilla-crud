import './ProductList.css'
import { Row, Container, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ProductList = ({
  products
}) => {
  return (
    <Container>
      <Row>
        {
          (products?.length > 0) ?
          products?.map(product => {
            return (
              <Col 
                xs={4}
                key={product?.id}
              >
                <div className='product-list-container'>
                  ProductList
                </div>
              </Col>
            )
          }) : 'nada'
        }
      </Row>
    </Container>
  )
}

ProductList.propTypes = {
  products: PropTypes.array
}

export default ProductList