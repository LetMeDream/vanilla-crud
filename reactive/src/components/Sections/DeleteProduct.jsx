import Card from "../FormCard/FormCard"
import { Col } from "react-bootstrap"
import PropTypes from "prop-types"
import SelectInput from "../Inputs/SelectInput/SelectInput"
import {Button} from "react-bootstrap"

const DeleteProduct = ({
  xs,
  sm,
  md, 
  lg, 
  classnames = ''
}) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg}
      className={classnames}
    >
      <Card>
        <h1 className="section-title">
          Eliminar
        </h1>
        {/* Atributo start */}
        <SelectInput 
          title={'Producto'}
          itemToSelect={'producto'}
        />  
        {/* Nombre end */}
        <div className="flex">
          <Button className="btn-send" variant="outline-light" size="sm">
            Eliminar
          </Button>
        </div>
      </Card>
    </Col>
  )
}

DeleteProduct.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  classnames: PropTypes.string
}

export default DeleteProduct