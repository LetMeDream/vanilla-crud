import Card from "../../Card/Card"
import TextInput from "../../Inputs/TextInput/TextInput"
import { Col } from "react-bootstrap"
import PropTypes from "prop-types"
import {Button} from "react-bootstrap"

const AddProduct = ({
  xs,
  sm,
  md,
  lg
}) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg}>
      <Card>
        <h1 className="section-title">
          Añadir
        </h1>
        {/* Nombre start */}
        <TextInput
          title='Nombre del producto'
          type='text'
          id='product-name'
          placeholder={'Nombre del producto'}
        />
        {/* Nombre end */}
        {/* Valor start */}
        <TextInput
          title='Valor del producto'
          type='number'
          id='product-value'
          placeholder={'Valor del producto'}
        />
        {/* Valor end */}
        {/* Existencia */}
        <TextInput
          title='Existencia'
          type='number'
          id='product-existance'
          placeholder={'Productos en existencia'}
          /* Existencia */
        />
        {/* Nombre start */}
        <TextInput
          title='Url Imagen'
          type='text'
          id='product-url-image'
          placeholder={'URL de imagen del producto'}
        />
        {/* Nombre end */}
        <div className="flex">
          <Button className="btn-send" variant="outline-light" size="sm">
            Añadir
          </Button>
        </div>
      </Card>
    </Col>
  )
}

AddProduct.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
}

export default AddProduct