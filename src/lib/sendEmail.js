import axios from 'axios'

const sendEmail = async (email, subject, message, name, company) => {
  return await axios.post('/api/send-mail', {
    email,
    subject,
    message,
    name,
    company,
  })
}

export default sendEmail
