import styles from './Display.module.css'

function Display({calVal}) {
  return (
    <input 
      type="text"  
      className={styles.display}
      value={calVal}
      placeholder='0'
      readOnly
    >
    </input>
  )
}

export default Display;