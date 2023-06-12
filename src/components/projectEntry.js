import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Projects.module.css'

export default function ProjectEntry({ project }) {
  const { title, description, technologies, vidSrc, imgSrc, repo, url, longUrl, gif, inDev = false } = project

  return (
    <article className={styles.project}>
      <h1 className={styles.project__title}>{title}</h1>
      {inDev && <h2 className={styles.inDev}>(In Development)</h2>}
        {vidSrc && <video
          className={styles.project__video}
          controlsList='noplaybackrate'
          width="320"
          height="180"
          src={vidSrc}
          autoPlay
          muted
          loop
        />}
        {imgSrc && <Image className={styles.project__video} src={imgSrc} width={320} height={180} alt='Spaceballs Now is Now gif' />}
      <div className={styles.project__links}>
      {repo &&
        <Link className={styles.project__link} href={repo} target='_blank'>
          Github Repo
          <div>
            <Image src='/github-logo.png' alt='github icon' width={30} height={30} />
          </div>
        </Link>}
      {url && <Link className={styles.project__link} href={longUrl} target='_blank'>
          {url}
        </Link>}
      </div>
      <h3 className={styles.project__description}>{description}</h3>
      <h2 className={styles.builtWith}>Built with:</h2>
      <ul className={styles.project__desktopTechnologies}>
        {technologies.map((tech) => (
          <li className={styles.technology} key={'projectOneTech' + tech}>
            {tech}
          </li>
        ))}
      </ul>
      <div className={styles.mobileTechnologies}>
        <p>{technologies.join(' | ')}</p>
      </div>
    </article>
  )
}
