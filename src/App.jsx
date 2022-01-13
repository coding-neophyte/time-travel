import useTimeTravel from "./hooks/TimeTravel"
import styles from './App.module.css'
import './App.css'



export default function App() {
  const { date, saveDate, undoDate, redoDate, currentDate } = useTimeTravel();


  return (
    <div className={styles.container}>
      <input type='date' aria-label='date' onChange={({ target })=> saveDate(target.value)} value={currentDate}/>
      <button aria-label='undo' onClick={undoDate}>Undo</button>
      <button aria-label='redo' onClick={redoDate}>Redo</button>
      {!currentDate ? <p>Please Enter Date</p> : <div aria-label="display" className="datedisplay"><p>{currentDate}</p></div> }
    </div>
  )
}
