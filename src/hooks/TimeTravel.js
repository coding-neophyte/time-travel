import { useState, useEffect } from 'react'
const useTimeTravel = () => {
    const [date, setDate] = useState([]);
    const [index, setIndex] = useState(null)
    const [currentDate, setCurrentDate] = useState('')


    useEffect(() => {
        if(index !== null){
        setCurrentDate(date[index])
        return currentDate
         }
    }, [index])


const saveDate = (event) => {
    setCurrentDate(event.target.value)
    setDate((prevState) => [...prevState, event.target.value])
    setIndex(date.length)

}

const undoDate = () => {
    if(index > 0){
    setIndex((prevState) => prevState - 1)
    }
}

const redoDate = () => {
    if(index < date.length - 1){
    setIndex((prevState) => prevState + 1)
    }
}

return { date, saveDate, undoDate, redoDate, currentDate }

}

export default useTimeTravel;
