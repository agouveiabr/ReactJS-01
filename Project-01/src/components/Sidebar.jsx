import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react'

export function Sidebar(){
  return(
    <aside className={styles.sidebar} >
      <img className={styles.cover} src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=M3w0OTI1NTZ8MHwxfHNlYXJjaHwxfHxkZXZ8ZW58MHwwfHx8MTY5Mjc0MzA0N3ww&ixlib=rb-4.0.3"/>
      <div className={styles.profile}>

        <img className={styles.avatar} src="https://github.com/agouveiabr.png" alt="Foto de perfil" />

        <strong>Alvaro Gouveia</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Seu Perfil
        </a>
      </footer>
    </aside>
  )
}