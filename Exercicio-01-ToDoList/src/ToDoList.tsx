import { InputTask } from './InputTask';
import styles from './ToDoList.module.css';
import { useState } from 'react';

import { Trash } from '@phosphor-icons/react';

import empty_note from './assets/empty_note.svg'

interface tasks{
  id: number;
  content: string;
  completed: boolean;
}

export function ToDoList() {
  
  const [tasks, setTasks] = useState<tasks[]>([]);

  function handleDeleteTask( id: number ){
    const filteredTasks = tasks.filter((task: tasks) => task.id !== id)
    setTasks(filteredTasks)
  }

  function handleCheckbox(id: number) {
    const updatedTasks = tasks.map((task: tasks) => {
      if (task.id === id) {
        return {...task, completed: !task.completed};
      } else {
        return task;
      }
    });
  
    setTasks(updatedTasks);
  }

  




  return (
    <div className={styles.container}>
      <InputTask 
        tasks={tasks}
        setTasks={setTasks}

      />
      <header className={styles.header}>
        <div className={styles.left}>
          <span className={styles.tasksCreated}>Tarefas Criadas</span>
          <span className={styles.tasksCreatedCount}>{tasks.length}</span>
        </div>
        <div className={styles.right}>
          <span className={styles.tasksCompleted}>Concluídas</span>
          <span className={styles.tasksCompletedCount}>{tasks.filter((task: tasks) => task.completed).length}</span>
        </div>
      </header>
      <div className={styles.tasks_container}>
        {
          tasks.length > 0 ? (
            tasks.map((task: tasks) => {
              return (
                <div key={task.id} className={styles.task}>
                  <div className={styles.checkbox_container}>
                    <input 
                      type="checkbox"
                      name="task"
                      id="task"
                      checked={task.completed}
                      onChange={() => handleCheckbox(task.id)}
                    />
                  </div>
                  <span className={task.completed ? styles.content_completed : styles.content}>{task.content}</span>
                  <span>
                    <Trash 
                      size={24} 
                      className={styles.trash}
                      onClick={() => handleDeleteTask(task.id)}  
                    />
                  </span>
                </div>
              )
            })
          ) : (
            <div className={styles.empty_todolist}>
              <img src={empty_note} alt="empty_note" />
              <p>Não há tarefas ainda</p>
            </div>
          )
        }
      </div>
    </div>
  )
}