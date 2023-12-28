import rocketSVG from './assets/rocket.svg';

import styles from './Header.module.css';

export function Header(){
  return (
    <>
      <h1 className={styles.header}>
        <img src={rocketSVG} alt="rocket" />
        <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </h1>
    </>
  )
}