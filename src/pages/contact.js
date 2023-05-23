import { useState } from 'react'
import { Box, Card, CardActions, TextField, Button, CardHeader } from '@mui/material'
import useContactForm from '@/hooks/useContactForm'
import AlertModal from '@/components/alertModal'
import sendEmail from '@/lib/sendEmail'
import styles from '@/styles/Contact.module.css'
import Image from 'next/image'
import Link from 'next/link'

const fields = ['name', 'company', 'email', 'subject', 'message']

function Contact() {
  const { values, setValues, handleChange } = useContactForm()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: '',
  })

  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const req = await sendEmail(
        values.email,
        values.subject,
        values.message,
        values.name,
        values.company
      )
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: 'Thank you. Your message has been sent.',
        })
      }
    } catch (err) {
      console.error(err)
      setResponseMessage({
        isSuccessful: false,
        message: 'Oops! Something went wrong. Please try again.',
      })
    }
    setValues({
      email: '',
      company: '',
      subject: '',
      name: '',
      message: '',
    })
    setIsDialogOpen(true)
  }

  return (
    <div className={styles.pageContainer}>
      <section className={styles.links}>
        <Link className={styles.link} href='https://github.com/eekbk'>
          Github
          <Image src='/github-logo.png' alt='github icon' height={30} width={30}/>
        </Link>
        <Link className={styles.link} href='https://www.linkedin.com/in/eekeric/'>
          Linkedin
          <Image src='/linkedin-logo.png' alt='linkedin icon' height={30} width={30}/>
        </Link>
      </section>
      {/* <h1>Want to connect? Have questions or comments? Leave me a message and I'll get back to you.</h1> */}
      <Card sx={{ padding: '1rem', maxWidth: '50rem', position: 'relative', justifyContent: 'center', overflow: 'auto' }}>
        <h1 className={styles.cardHeader}>Email me:</h1>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <TextField
              // sx={{margin: '4px'}}
              key={field}
              id={field}
              label={field}
              value={values[field]}
              onChange={handleChange}
              required={field !== 'company' ? true : false}
              type={field !== 'email' ? 'text' : 'email'}
              multiline={field !== 'message' ? false : true}
              minRows={field === 'message' ? 2 : null}
              className={styles[field]}
              sx={
                field === 'message' || field === 'subject'
                  ? { width: '97%', margin: '.25rem' }
                  : { width: '97%', margin: '.25rem' }
              }
            />
          ))}
          <CardActions>
            <Button
              className={styles.button}
              type="submit"
              value="Submit"
              variant="contained"
            >
              Send
            </Button>
          </CardActions>
        </form>
      </Card>
      <AlertModal
        isDialogOpen={isDialogOpen}
        handleDialogClose={handleDialogClose}
        responseMessage={responseMessage}
      />
    </div>
  )
}

export default Contact
