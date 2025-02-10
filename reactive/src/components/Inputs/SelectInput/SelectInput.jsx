import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function SelectInput({
  title,
  itemToSelect,
  id,
  register
}) {
  return (
    <Form.Group className='input my-3'>
      <Form.Text id="passwordHelpBlock" className='text'>
        {title}
      </Form.Text>
      <Form.Select 
        size='sm' aria-label="Default select example"
        {...(register ? register(id) : {})} /* <- Condicional para evitar que 'TextInputs' sin 'register' crasheen. */
      >
        <option>Elija un {itemToSelect || ' item'}</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Form.Group>
  );
}

SelectInput.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  itemToSelect: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.func
}

export default SelectInput;