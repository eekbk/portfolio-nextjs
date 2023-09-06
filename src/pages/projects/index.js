import { useEffect, useState } from 'react'
import ProjectEntry from '@/components/projectEntry'
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix
} from '@/lib/data/projectsData'
import styles from '@/styles/Projects.module.css'

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    mounted && (

        <div className={styles.project__list}>
          <ProjectEntry
            project={projectOne}
          />
          <ProjectEntry project={projectTwo}/>
          <ProjectEntry project={projectThree}/>
          <ProjectEntry project={projectFour}/>
          <ProjectEntry project={projectFive}/>
          <ProjectEntry project={projectSix}/>
        </div>
    )
  )
}
