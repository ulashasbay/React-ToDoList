
function Btns({ setAllTodos, allTodos, setTodos }) {

    

    const clickAll = () => {
        setTodos(allTodos.map((item) => {
            return item;
        }))
    };

    const clickActive = () => {
        setTodos(allTodos.filter((item) => {
            return item.done === false
        }))
    };

    const clickCompleted = () => {
        setTodos(allTodos.filter((item) => {
            return item.done === true
        }))
    };

    const clearCompleted = () => {
        setAllTodos(allTodos.filter((item) => {
            return item.done === false
        }))
    };
        

    return (
        <div>
           <footer className="footer">

                <span className="todo-count">
                    <strong>{allTodos.length}</strong> items left
                </span>

                <ul className="filters">
                    <li>
                        <a className="selected" onClick={() => clickAll()} >All</a>
                    </li>
                    <li>
                        <a onClick={() => clickActive()}>Active</a>
                    </li>
                    <li>
                        <a onClick={() => clickCompleted()}>Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={() => clearCompleted()}>
                    Clear completed
                </button>
            </footer> 
        </div>
    )
}

export default Btns
