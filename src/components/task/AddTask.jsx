import React, {useState} from 'react'
import ListDisplay from'./ListDisplay';

const AddTask = () => {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const handleClick = () => {
        setList([...list, input])
    }
    
    // const listDisplay = list.map((task) => {
    //     return <h2>{task}</h2>
    // })

    return (
        <div>
            <h1>Add Task</h1>
            <input type="text" onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleClick}>Add Task</button>
            <ListDisplay list={list}/>
        </div>
    )
}

export default AddTask