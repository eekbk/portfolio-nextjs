'use client'
import { useState } from 'react'
import { Card, CardActions, TextField, Button, CircularProgress } from '@mui/material'
import useContactForm from '@/hooks/useContactForm'
import AlertModal from '../components/alertModal'
import sendEmail from '@/lib/sendEmail'
import styles from './Contact.module.css'
import Image from 'next/image'
import Link from 'next/link'

const fields = ['name', 'company', 'email', 'subject', 'message']

function Contact() {
  const { values, setValues, handleChange } = useContactForm()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: '',
  });

  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true);
    try {
      await sendEmail(
        values.email,
        values.subject,
        values.message,
        values.name,
        values.company
      )
      setResponseMessage({
        isSuccessful: true,
        message: 'Thanks for reaching out! I will get back to you soon.',
      })
      setValues({
        email: '',
        company: '',
        subject: '',
        name: '',
        message: '',
      })
    } catch (err) {
      console.log('err: ', err)
      setResponseMessage({
        isSuccessful: false,
        message: 'Oops! Something went wrong. Please try again later.',
      })
    }

    setIsDialogOpen(true)
    setIsSending(false);
  }

  return (
    <div className={styles.pageContainer}>
      <section className={styles.links}>
        <Link className={styles.link} href='https://github.com/eekbk' target='_blank'>
          Github
          <Image src='/github-logo.png' alt='github icon' height={30} width={30}/>
        </Link>
        <Link className={styles.link} href='https://www.linkedin.com/in/eekeric/' target='_blank'>
          Linkedin
          <Image src='/linkedin-logo.png' alt='linkedin icon' height={30} width={30}/>
        </Link>
      </section>
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
              {isSending
                ? <CircularProgress size='1.5rem' sx={{ color: 'white' }}/>
                : 'Send'}
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
