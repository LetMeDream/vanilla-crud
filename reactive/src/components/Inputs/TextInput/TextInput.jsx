import './TextInput.css' 
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const TextInput = ({ 
  title,
  type,
  id,
  placeholder,
  register
 }) => {
  return (
    <Form.Group className='input my-3'>
      <Form.Text id="passwordHelpBlock" className='text'>
        {title}
      </Form.Text>
      <Form.Control
        {...(register ? register(id) : {})} /* <- Condicional para evitar que 'TextInputs' sin 'register' crasheen. */
        size='sm'
        type={type}
        id={id}
        aria-describedby="passwordHelpBlock"
        placeholder={placeholder}
      />
    </Form.Group>
  )
}

/* Propiedades que espera recibir el componente. */
TextInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func
}

export default TextInput