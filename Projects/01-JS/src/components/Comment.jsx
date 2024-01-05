import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDelete}){

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDelete(content)
  }

  function handleLikeComment(){
    setLikeCount((state)=>{
      return state + 1
    })
  }

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

            <button onClick={handleDeleteComment} title='Deletar comentario'>
              <Trash size={24}/>
            </button>

          </header> 
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>
    </div>
  )
}