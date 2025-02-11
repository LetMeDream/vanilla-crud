import { useFormContext } from "react-hook-form"
import { useState, useEffect } from "react"

export const useTextInput = (
  id
) => {
  const { formState: {errors} } = useFormContext()
  const [error, setError] = useState(null)
  const [isError, setIsError] = useState(null)

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

  return {
    error,
    isError
  }
}