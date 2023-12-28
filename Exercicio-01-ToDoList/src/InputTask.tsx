import styles from './InputTask.module.css';
import { useState } from 'react';

interface InputTaskProps {
  tasks: {
    id: number;
    content: string;
    completed: boolean;
  }[]
  setTasks: any;
}

export function InputTask( { tasks, setTasks }: InputTaskProps){

  const [inputValue, setInputValue] = useState('')

  function handleCreateTask( e: any ){
    e.preventDefault();

    const newTask = {
      id: Math.random(),
      content: inputValue,
      completed: false
    }

    setTasks([...tasks, newTask])
    setInputValue('')

  }


  return (
    <>
      <form action="" className={styles.form}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa..." 
          onChange={ (e) => setInputValue(e.target.value) }
          value={inputValue}  
        />
        <button type="submit" onClick={handleCreateTask} >Criar</button>
      </form>
    </>
  )
}