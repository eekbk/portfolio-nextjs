import { useState } from 'react'

const useContactForm = () => {
  const [values, setValues] = useState({
    email: '',
    company: '',
    subject: '',
    name: '',
    message: '',
  })

  const handleChange = (e) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      }
    })
  }

  return { values, setValues, handleChange }
}

export default useContactForm
