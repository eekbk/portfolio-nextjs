import axios from 'axios'

const sendEmail = async (email, subject, message, name, company) => {
  try {
    const res = await axios.post('/api/send-mail',
      {
        email,
        subject,
        message,
        name,
        company,
      }
    );
    console.log('res: ', res);
  } catch (err) {
    console.log('err from sendEmail: ', err);
 }

}

export default sendEmail
