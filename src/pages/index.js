import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Hi, I&apos;m Eric Kuehnemann. I&apos;m a software developer who loves creating things. If you have things you&apos;d like to create, <Link className={styles.contactLink} href='/contact'>please contact me</Link>.
      </p>
      <div className={styles.imageContainer}>
        <Image src="/robot_flowers1.png" className={styles.image} fill={true} alt="friendly robot picking flowers"/>
      </div>
    </div>
  )
}
