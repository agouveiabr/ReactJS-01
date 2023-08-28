import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/agouveiabr.png" />
          <div className={styles.authorInfo}>
            <strong>Alvaro Gouveia</strong>
            <span>Web Developer</span>
          </div>
        </div>
        
        <time title='11 de maio as 9:12h' dateTime='2023-06-11 09:12:22'>Publicado ha 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a> 👉 jane.design/doctorcare</a></p>
        <p>
          <a>#novoprojeto</a>{' '}
          <a>#nlw</a>{' '}
          <a>#rocketseat</a>
        </p>

      </div>


    </article>
  )
}