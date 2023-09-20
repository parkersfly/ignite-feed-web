import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, publishedAt, content }){
  const [ comments, setComments ] = useState([])
  const [ newCommentText, setNewCommentText ] = useState("")

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(){
    event.preventDefault()
    
    setComments(prevState => [...prevState, newCommentText])
    setNewCommentText("")
  }

  function deleteComment(commentToDelete) {
    const removeTheListComment = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(removeTheListComment)
  }

  function handleChangeComment(){
    setNewCommentText(event.target.value)
    event.target.setCustomValidity("")
  }

  function handleEmptyInvalidShield(){
    event.target.setCustomValidity("Este campo é obrigatório!")
  }

  const newCommentIsEmpty = newCommentText.length === 0

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(item => {
            if(item.type === 'paragraph'){
              return <p key={item.content}>{item.content}</p>
            } else if (item.type === 'link'){
              return <p key={item.content}><a href="#">{item.content}</a></p>
            }
          })
        }


        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleChangeComment}
          required
          onInvalid={handleEmptyInvalidShield}
          />

          <footer>
            <button 
            type="submit"
            disabled={newCommentIsEmpty}
            >Publicar</button> 
          </footer>
        </form>
      </div>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
             <Comment 
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
             />
            )
          })}
      </div>  
    </article>
  )
}