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
        <img 
        className={styles.avatar}
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=50" 
        />

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