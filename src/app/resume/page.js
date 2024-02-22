'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Resume.module.css'
import Button from '@mui/material/Button'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Resume() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.heading}>
      <Button
        variant="outlined"
        endIcon={<FileDownloadIcon />}
        // href='Eric_Kuehnemann_Resume.pdf'
        sx={{
          color: 'white',
          border: '2px solid #ffc857',
          '&:hover': {
            border: '2px solid #6369d1'
          }
        }}
      >      <a href='Eric_Kuehnemann_Resume.pdf' download>DOWNLOAD .PDF </a>
      </Button>
      </section>
      <h1 className={`${styles.title} ${styles.textDivider}`}>
        CERTIFICATIONS
      </h1>
        <section className={styles.certs}>
        <Link className={styles.cert} href='https://www.credly.com/badges/73f92df7-a49d-4602-b09a-fb58ee3c293e/public_url' target='_blank'>
          <div id={styles.awsBadge} className={styles.imageContainer}
          >
            <Image className={styles.image} src='/AWS-badge.png' width={150} height={150} alt='AWS Certified Cloud Practitioner Badge' />
          </div>
          <p className={styles.cert__description}>AWS Certified Cloud Practitioner</p>
        </Link>
        <Link className={styles.cert} href='https://bcert.me/sywjtccit' target='_blank'>
          <div className={styles.imageContainer}>
          <Image className={styles.image} src='/CSM-badge.png' width={150} height={150} alt='AWS Certified Cloud Practitioner Badge' />
          </div>
          <p className={styles.cert__description}>Certified ScrumMaster</p>
        </Link>
      </section>
      <h1 className={`${styles.title} ${styles.textDivider}`}>EMPLOYMENT</h1>
      <section className={styles.jobs}>
        <div className={styles.job}>
          <h2 className={styles.job__company}>CoHive Software</h2>
          <h3 className={styles.job__position}>Software Developer (Contract)</h3>
          <div className={styles.job__dateAndLoc}>
            <h4 className={styles.job__date}>April 2023 - Present</h4>
            <h4 className={styles.job__location}>Remote</h4>
          </div>
          <ul className={styles.job__duties}>
            <li className={styles.job__duty}>
            Refactor MongoDB database from a relational model to leverage noSQL capabilities, significantly enhancing data retrieval speeds and reducing server load. This optimization led to noticeable improvements in application performance and scalability.
            </li>
            <li className={styles.job__duty}>
            Convert complex Figma wireframes into responsive mobile app UI/UX with React Native, effectively aligning with project specifications and stakeholder expectations
            </li>
          </ul>
        </div>
        {/**TODO: STOP */}
        <div className={styles.job}>
          <h2 className={styles.job__company}>Veterinary Care Accessibility Project</h2>
          <h3 className={styles.job__position}>Fullstack Software Developer (Contract)</h3>
          <div className={styles.job__dateAndLoc}>
            <h4 className={styles.job__date}>Jan 2023 - April 2023</h4>
            <h4 className={styles.job__location}>Remote</h4>
          </div>
          <ul className={styles.job__duties}>
            <li className={styles.job__duty}>
              Develop b2b application designed for veterinary hospitals to rate their own accessibility to their communities
            </li>
            <li className={styles.job__duty}>
            Translate 20+ complex Excel formulas into an intuitive web application interface, enhancing user experience.
            </li>
            <li className={styles.job__duty}>
            Implement advanced web analytics tools, enabling the company to gain deeper insights into user behavior and drive data-informed decisions for website optimization
            </li>
          </ul>
        </div>
        <div className={styles.job}>
          <h2 className={styles.job__company}>W Hotel New York - Times Square</h2>
          <h3 className={styles.job__position}>Ambassador</h3>
          <div className={styles.job__dateAndLoc}>
            <h4 className={styles.job__date}>May 2012 - April 2022</h4>
            <h4 className={styles.job__location}>New York, NY</h4>
          </div>
          <ul className={styles.job__duties}>
            <li className={styles.job__duty}>
            Excelled in a fast-paced, high-pressure environment, developing and leveraging key skills in communication, problem-solving, and teamwork. Recognized for outstanding customer service and adaptability, significantly contributing to improved customer satisfaction and repeat business.
            </li>

          </ul>
        </div>
      </section>
      <h1 className={`${styles.title} ${styles.textDivider}`}>EDUCATION</h1>
      <section className={styles.education}>
        <div className={styles.education__school}>
          <h2 className={styles.education__schoolName}>Hack Reactor - Operation Spark</h2>
          <h3>Advanced Software Full-time Engineering Immersive Program</h3>
          <h4>IBC Fundamentals of Java Script, Functional Programming, and Web Development Level 3</h4>
        </div>
        <div className={styles.education__school}>
          <h2 className={styles.education__schoolName}>University of North Carolina at Greensboro</h2>
          <h3>Bachelor of Fine Arts</h3>
          <h4>Theatre / Acting</h4>
        </div>
      </section>
      {/* <section className={styles.other}>
        <h1 className={styles.title}>Additional Experience</h1>
      </section> */}
      <h1 className={`${styles.title} ${styles.textDivider}`}>TECHNICAL SKILLS</h1>
      <section className={styles.tech}>
        <div className={styles.tech__category}>
          <h2 className={styles.tech__categoryName}>Languages</h2>
          <ul className={styles.tech__items}>
            <li className={styles.tech__item}>JavaScript</li>
            <li className={styles.tech__item}>TypeScript</li>
            <li className={styles.tech__item}>HTML5</li>
            <li className={styles.tech__item}>CSS3</li>
            <li className={styles.tech__item}>ES6</li>
            <li className={styles.tech__item}>JSON</li>
          </ul>
        </div>
        <div className={styles.tech__category}>
          <h2 className={styles.tech__categoryName}>Libraries/<br/>Frameworks</h2>
          <ul className={styles.tech__items}>
            <li className={styles.tech__item}>React</li>
            <li className={styles.tech__item}>React Native</li>
            <li className={styles.tech__item}>Redux</li>
            <li className={styles.tech__item}>Angular</li>
            <li className={styles.tech__item}>Express</li>
            <li className={styles.tech__item}>Tailwind CSS</li>
            <li className={styles.tech__item}>Next.js</li>
            <li className={styles.tech__item}>Mongoose</li>
            <li className={styles.tech__item}>JQuery</li>
            <li className={styles.tech__item}>Jest</li>
            <li className={styles.tech__item}>Prisma</li>
            <li className={styles.tech__item}>D3</li>
          </ul>
        </div>
        <div className={styles.tech__category}>
          <h2 className={styles.tech__categoryName}>Databases</h2>
          <ul className={styles.tech__items}>
            <li className={styles.tech__item}>SQL</li>
            <li className={styles.tech__item}>NoSQL</li>
            <li className={styles.tech__item}>MongoDB</li>
            <li className={styles.tech__item}>PostgreSQL</li>
            <li className={styles.tech__item}>MySQL</li>
          </ul>
        </div>
        <div className={styles.tech__category}>
          <h2 className={styles.tech__categoryName}>Tools/<br/>Environments</h2>
          <ul className={styles.tech__items}>
            <li className={styles.tech__item}>Node</li>
            <li className={styles.tech__item}>npm</li>
            <li className={styles.tech__item}>webpack</li>
            <li className={styles.tech__item}>Figma</li>
            <li className={styles.tech__item}>Miro</li>
            <li className={styles.tech__item}>Jira</li>
            <li className={styles.tech__item}>Trello</li>
            <li className={styles.tech__item}>Postman</li>
            <li className={styles.tech__item}>Github</li>
            <li className={styles.tech__item}>Passport JS</li>
          </ul>
        </div>
        <div className={styles.tech__category}>
          <h2 className={styles.tech__categoryName}>Methodologies</h2>
          <ul className={styles.tech__items}>
            <li className={styles.tech__item}>RESTful API</li>
            <li className={styles.tech__item}>Agile</li>
            <li className={styles.tech__item}>Scrum</li>
            <li className={styles.tech__item}>Git</li>
            <li className={styles.tech__item}>CI/CD</li>
            <li className={styles.tech__item}>IDE</li>
            <li className={styles.tech__item}>MVC</li>
            <li className={styles.tech__item}>DevTools</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Resume
// https://drive.google.com/file/d/1MGS5I6NUy6pR5tbiuzLU-oF9NiIQP9Zs/view?usp=sharing
