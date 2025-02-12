import Card from "../FormCard/FormCard"
import TextInput from "../Inputs/TextInput/TextInput"
import { Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { useForm, FormProvider } from "react-hook-form"
import { addProductForm } from "../../constants/Schemas"
import { yupResolver } from '@hookform/resolvers/yup'
import CustomButton from "../Shared/CustomButton"
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import { errorToast, actionToast } from "../../helpers/toasts"

const AddProduct = ({
  xs,
  sm,
  md,
  lg,
  setProducts,
  classnames = ''
}) => {
  const methods = useForm({
    resolver: yupResolver(addProductForm)
  });
  const [idForProduct, setIdForProduct] = useState(uuidv4())
  const { register, handleSubmit, trigger, reset } = methods;
  const onSubmit = async data => { 
    data = {
      ...data,
      idForProduct
    }
    setProducts(previousProducts => [...previousProducts, data]) 
    reset()
  }

  /* Función para 'deshacer' la creació del producto recientemente creado. */
  const undoRecentlyCreatedProduct = () => {
    alert(idForProduct)
  }

  const onClick = async () => {
    if (await trigger()) { // trigger() devuelve true si el formulario no posee errores.
      actionToast({
        title: 'Èxito!',
        content: 'El producto ha sido añadido',
        action: undoRecentlyCreatedProduct
      })
      setIdForProduct(uuidv4())
    } else {
      errorToast({
        title: 'Ups!',
        content: 'Revise los errores del formulario'
      })
    }
  }

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg}
      classnames={classnames}
    >
      <FormProvider {...methods}>
        <Card>
          <form 
            onSubmit={handleSubmit(onSubmit)}

          >
            <h1 className="section-title">
              Añadir
            </h1>
            {/* Nombre start */}
            <TextInput
              title='Nombre del producto'
              type='text'
              id='product-name'
              placeholder={'Nombre del producto'}
              register={register}
            />
            {/* Valor start */}
            <TextInput
              title='Valor del producto'
              type='number'
              id='product-value'
              placeholder={'Valor del producto'}
              register={register}
            />
            {/* Existencia */}
            <TextInput
              title='Existencia'
              type='number'
              id='product-existance'
              placeholder={'Productos en existencia'}
              register={register}
            />
            {/* Url start */}
            <TextInput
              title='Url Imagen'
              type='text'
              id='product-url-image'
              placeholder={'URL de imagen del producto'}
              register={register}
            />
            {/* Agregar btn */}
            <div className="flex">
              <CustomButton
                text={'Agregar'}
                buttonType={'submit'}
                classnames={'mt-2'}
                onClick={onClick}
              />
            </div>
          </form>
          {idForProduct}
        </Card>
      </FormProvider>
    </Col>
  )
}

AddProduct.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  setProducts: PropTypes.array,
  classnames: PropTypes.string,
  lastlyAddedProductId: PropTypes.string,
  setLastlyAddedProductId: PropTypes.func
}

export default AddProduct