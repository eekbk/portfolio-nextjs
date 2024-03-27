import Image from 'next/image'
import styles from './Home.module.css'
import Link from 'next/link'
import robotPic from '../../public/robot_flowers1.png'

export default function Page() {

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Hi, I&apos;m Eric Kuehnemann. I&apos;m a software developer who loves creating things. If you have things you&apos;d like to create, <Link className={styles.contactLink} href='/contact'>please contact me</Link>.
      </p>
      <div className={styles.imageContainer}>
        <Image
          src={robotPic}
          className={styles.image}
          alt="friendly robot picking flowers"
        />
      </div>
    </div>
  )
}
