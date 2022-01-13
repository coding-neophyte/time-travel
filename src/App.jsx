import useTimeTravel from "./hooks/TimeTravel"


export default function App() {
  const { date, saveDate, undoDate, redoDate, currentDate } = useTimeTravel();


  return (
    <div>
      <input type='date' onChange={saveDate} value={currentDate} />
      <button onClick={undoDate}>Undo</button>
      <button onClick={redoDate}>Redo</button>

      <div>{currentDate}</div>
    </div>
  )
}
