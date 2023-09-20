import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

  export function Comment({ content, onDeleteComment }){
   
    function handleDeleteComment(){
      onDeleteComment(content)
    }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/parkersfly.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Adrian Martins</strong>
              <time title="16 de Setembro ás 19:34" dateTime="2023-09-16 19:34:30">Publicado há 1hr atrás</time>
            </div>

            <button 
            onClick={handleDeleteComment}
            title="Deletar comentário"
            >
              <Trash size={20}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={24}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}