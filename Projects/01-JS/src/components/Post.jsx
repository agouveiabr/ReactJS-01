import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'



export function Post({author, content, publishedAt}){

  const [comments, setComments] = useState([
    'Post muito bacana, amigao'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = format(publishedAt, "dd 'de' MMM 'de' yyyy", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateComment (e) {
    e.preventDefault()
    e.target.comment.setCustomValidity('')

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleDeleteComment(comment){
    console.log(`Comentario '${comment}' deletado`)
    setComments(comments.filter(c => c !== comment))
  }

  const isNewCommentEmpty = newCommentText.length === 0;



  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        
        <time title={publishedDateFormated} dateTime='2023-06-11 09:12:22'>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>

        {content.map((line, index) => {
          if(line.type === 'paragraph'){
            return <p key={index}>{line.content}</p>
          } else if(line.type === 'link'){
            return <p key={index}><a href=''>{line.content}</a></p>
          }
        }
        )}

      </div>
      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='O que você achou do post?'
          value={newCommentText}
          onChange={e => setNewCommentText(e.target.value)}
          onInvalid={e => e.target.setCustomValidity('O comentário não pode estar vazio')}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty} >Enviar feedback</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment 
            key={index}
            content={comment}
            onDelete={handleDeleteComment}
          />
        ))}
      </div>


    </article>
  )
}