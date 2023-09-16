import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar}
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=50" 
          />
          <div className={styles.authorInfo}>
            <strong>Adrian Martins</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="16 de Setembro ás 19:34" dateTime="2023-09-16 19:34:30">Publicado há 1hr</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="#"> jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{" "}
          <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>


        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
          placeholder="Deixe um comentário"
          />

          <footer>
            <button type="submit">Publicar</button> 
          </footer>
        </form>
      </div>

    </article>
  )
}