import { useFormContext, useWatch } from "react-hook-form"
import { useState, useEffect } from "react"

export const useTextInput = (
  id
) => {
  const { formState: {errors} } = useFormContext()
  const [error, setError] = useState(null)          // Error controlará mostrar o no el mensaje de error.
  const [isError, setIsError] = useState(null)      // Mientras que 'isError' controlará las clases CSS para el borde rojo de los Inputs, al momento del error.
  const value = useWatch({name: id})

  /* useEffect para marcar o desmarcar el error en el input */
  useEffect(() => {
    if (errors?.[id]){
      setError(errors?.[id])
      setIsError(true)
    } else {
      setError(null)
    }
  }, [errors, id])

  /* useEffect para quitar el color rojo de los errores en los Fields, luego de pasado un tiempo */
  useEffect(() => {
    setTimeout(() => {
      if(errors) setIsError(false)
    }, 2500);
  }, [errors])

  /* useEffect para quitar mensaje de error, si el usuario modifica el input erróneo en cuestión */
  useEffect(() => {
    if(value) setError(false)
  }, [value])

  return {
    error,
    isError
  }
}