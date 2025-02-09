import './Card.css'
import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types'


const Card = ({ children }) => {
  return (
    <Col>
      <div className="section">
        { children || 'Empty section. Provide content.' }
      </div>
    </Col> 
  )
}

Card.propTypes = {
  children: PropTypes.node
}

export default Card