import Card from "../Card/Card"
import TextInput from "../Inputs/TextInput/TextInput"
import { Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { useShoppingCar } from "../../hooks/useShoppingCar"
import { useForm, FormProvider } from "react-hook-form";
import { addProductForm } from "../../constants/Schemas"
import { yupResolver } from '@hookform/resolvers/yup';
import CustomButton from "../Shared/CustomButton"
import { toast } from 'react-toastify'
import {  WithActions } from "../Shared/Toasts/Toasts"

const AddProduct = ({
  xs,
  sm,
  md,
  lg
}) => {
  useShoppingCar()
  const methods = useForm({
    resolver: yupResolver(addProductForm)
  });
  const { register, handleSubmit, trigger } = methods;
  const onSubmit = data => console.log(data);

  const onClick = async () => {
    console.log(await trigger())
    if (await trigger()) { 
      toast(WithActions, {
        data:{
          title: 'Éxito!',
          content: 'El producto ha sido añadido'
        },
        autoClose: false
      })
    }
  }

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg}>
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
        </Card>
      </FormProvider>
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