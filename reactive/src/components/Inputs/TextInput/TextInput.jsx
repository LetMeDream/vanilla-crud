import './TextInput.css' 
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const TextInput = ({ 
  title,
  type,
  id,
  placeholder
 }) => {
  return (
    <Form.Group className='input my-3'>
      <Form.Text id="passwordHelpBlock" className='text'>
        {title}
      </Form.Text>
      <Form.Control
        size='sm'
        type={type}
        id={id}
        aria-describedby="passwordHelpBlock"
        placeholder={placeholder}
      />
    </Form.Group>
  )
}

TextInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextInput