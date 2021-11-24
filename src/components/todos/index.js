import { useState, useEffect } from 'react'
import Form from './form'
import List from './list'
import Btns from './buttons/btns'
import "./style.css"
import {v4 as uuidv4} from 'uuid';

const initialTodos = [{
    text: "What i will do?",
    done: true,
    id: uuidv4()
},
{
    text: "I will play Football!!!",
    done: false, 
    id: uuidv4()
},
{
    text: "I am going to cinema!!",
    done: true,
    id: uuidv4()
}
]

function Todos() {

    const [allTodos, setAllTodos] = useState(initialTodos);

    const [todos, setTodos] = useState(allTodos);

    useEffect(() => {
        setTodos(allTodos)
    }, [allTodos])

    
    return (
        <div>
            <Form setAllTodos={setAllTodos} allTodos={allTodos} setTodos={setTodos} todos={todos} />
            <List setAllTodos={setAllTodos} allTodos={allTodos} setTodos={setTodos} todos={todos} />
            <Btns setAllTodos={setAllTodos} allTodos={allTodos} setTodos={setTodos} todos={todos} />
        </div>
    )
}

export default Todos
