import { Button } from "react-bootstrap"
import PropTypes from "prop-types"
import classNames from "classnames"

const CustomButton = ({
  text,
  classnames,
  outline = true,
  type = 'light',
  buttonType
}) => {
  return (
    <Button 
      className={classNames(`btn-send ${classnames}`)} 
      // variant="outline-light" 
      variant={outline ? `outline-${type}` : type}
      size="sm"
      type={buttonType}
    >
      {text}
    </Button>
  )
}

CustomButton.propTypes = {
  text: PropTypes.string,
  classnames: PropTypes.string,
  outline: PropTypes.bool,
  type: PropTypes.string,
  buttonType: PropTypes.string
}

export default CustomButton