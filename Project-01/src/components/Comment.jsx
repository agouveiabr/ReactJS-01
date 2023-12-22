import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/agouveiabr.png'/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alvaro Gouveia</strong>
              <time title='11 de Maio as 08:13' dateTime='2022-06-11 08:13:30'>Cerca de 1h atras</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={24}/>
            </button>

          </header> 
          <p>Muito Bom Devon, parabens</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
}