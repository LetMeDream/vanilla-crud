import PropTypes from 'prop-types'


const Card = ({ children, classname }) => {
  return (
      <div className={`section ${classname}`}>
        { children || 'Empty section. Provide content.' }
      </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string
}

export default Card