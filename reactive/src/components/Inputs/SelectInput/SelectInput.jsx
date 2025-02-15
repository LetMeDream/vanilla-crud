import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function SelectInput({
  title,
  itemToSelect,
  id,
  register,
  products
}) {
  return (
    <Form.Group className='input my-3'>
      <Form.Text id="passwordHelpBlock" className='text'>
        {title}
      </Form.Text>
      <Form.Select 
        size='sm' aria-label="Default select example"
        {...(register ? register(id) : {})} /* <- Condicional para evitar que 'TextInputs' sin función 'register' crasheen. */
      >
        <option>Elija un {itemToSelect || ' item'}</option>
        {products?.map((product) => {
          return  (<>
            <option>{product?.['product-name']}</option>
          </>)
        })}
      </Form.Select>
    </Form.Group>
  );
}

SelectInput.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  itemToSelect: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.func,
  products: PropTypes.array
}

export default SelectInput;