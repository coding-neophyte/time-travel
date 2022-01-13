import { useState, useEffect } from 'react'
const useTimeTravel = () => {
    const [date, setDate] = useState([]);
    const [index, setIndex] = useState(null)
    const [currentDate, setCurrentDate] = useState('')


    useEffect(() => {
        if(index !== null){
        setCurrentDate(date[index])
        return currentDate;
         }
    }, [index])


const saveDate = (value) => {
    setCurrentDate(value)
    setDate((prevState) => [...prevState.slice(0, index + 1), value, ...prevState.slice(index + 1, prevState.length + 1)])
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
