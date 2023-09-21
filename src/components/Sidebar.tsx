import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

import { PencilSimpleLine } from 'phosphor-react'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1691394526534-2f0b6c7373da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60==50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/parkersfly.png"/>

        <strong>Adrian Martins</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}