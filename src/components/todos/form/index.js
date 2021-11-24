import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

function Form({ setAllTodos, allTodos }) {

    const [form, setForm] = useState({
        text: "",
        done: "",
        id: ""
    });

    const inputChange = ((e) => {
        setForm({...form, text: e.target.value, done: false, id: uuidv4()})     
    });

    const onKeyEnter = ((e) => {   
        if (e.key ==='Enter') {
            if (e.target.value !=="") {
                setAllTodos([...allTodos, form])
                console.log(form)
                e.target.value = ""  
            };
            e.preventDefault();
             
        };
    });

    return (
        <div>
            <header className="header">
                <h1>Todos</h1>
                <form onKeyPress={onKeyEnter}>
                    <input className="new-todo" 
                    placeholder="What needs to be done?"
                    onChange={inputChange}
                     />
                </form>

            </header>
        </div>
    )
}

export default Form
