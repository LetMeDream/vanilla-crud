import * as yup from 'yup'

/* Archivo para definir los Schemas de los formularios a utilizar. */

/* Schema del formulario de AÑADIR PRODUCTO */
export const addProductForm = yup.object({
  'product-name': yup.string().required('Este campo es obligatorio'),
  'product-value': yup.number().typeError('Este campo es obligatorio').required('Este campo es obligatorio'),
  'product-existance': yup.number().typeError('Este campo es obligatorio').required('Este campo es obligatorio'),
  'product-url-image': yup.string().url('Debe ser una URL válida').required('Este campo es obligatorio')
})