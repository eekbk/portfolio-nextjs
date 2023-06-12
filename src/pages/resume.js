import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Resume.module.css'
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
      {/* <section >
      <a className={styles.pdfDownloadButton} href='Eric_Kuehnemann_Resume.pdf' download>DOWNLOAD .PDF <FileDownloadIcon className={styles.downloadIcon}/></a>
      </section> */}
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
          <h2 className={styles.job__company}>Veterinary Care Accessibility Project</h2>
          <h3 className={styles.job__position}>Fullstack Software Developer (Contract)</h3>
          <div className={styles.job__dateAndLoc}>
            <h4 className={styles.job__date}>2022-Current</h4>
            <h4 className={styles.job__location}>Remote</h4>
          </div>
          <ul className={styles.job__duties}>
            <li className={styles.job__duty}>
              Develop b2b application designed for veterinary hospitals to rate their own accessibility to their communities
            </li>
            <li className={styles.job__duty}>
              Translate client’s formula-driven .xlsx into page flow, dependent on user input, with multi-dimensional branching logic
            </li>
            <li className={styles.job__duty}>
              Convert client’s Figma wireframe into pixel for pixel UI/UX
            </li>
            <li className={styles.job__duty}>
              Utilize Agile methodologies to communicate with client and update app continuously
            </li>
          </ul>
        </div>
        <div className={styles.job}>
          <h2 className={styles.job__company}>W Hotel New York - Times Square</h2>
          <h3 className={styles.job__position}>Ambassador</h3>
          <div className={styles.job__dateAndLoc}>
            <h4 className={styles.job__date}>2012-2022</h4>
            <h4 className={styles.job__location}>New York, NY</h4>
          </div>
          <ul className={styles.job__duties}>
            <li className={styles.job__duty}>
              Delivered repeat customers by creating a warm and welcoming environment for guests
            </li>
            <li className={styles.job__duty}>
              Increased hotel’s rating on Tripadvisor, with positive customer reviews mentioning me by name, by resolving issues through problem-solving, creativity, communication, adaptability and teamwork
            </li>
            <li className={styles.job__duty}>
              Worked in a fast-paced atmosphere, adapted to unique and novel situations
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
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Resume
// https://drive.google.com/file/d/1MGS5I6NUy6pR5tbiuzLU-oF9NiIQP9Zs/view?usp=sharing
