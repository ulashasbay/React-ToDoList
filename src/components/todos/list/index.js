
function List({ setAllTodos, allTodos, todos }) {

    const handleDelete = (todo) => {
        setAllTodos(allTodos.filter((item) => item.id !== todo.id))
    };

    const handleComplete = (todo) => {
        setAllTodos(allTodos.map((item) => {
            if (item.id === todo.id) {
                return {...item, done: !item.done}
            }
            return item;
        }))
    };
    
    
    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {todos.map((todo) => 
                        <li key={todo.id} className={todo.done ? "completed": ""} >
                            <div className="view">
                                <input className="toggle" type="checkbox" onClick={() => handleComplete(todo)} />
                                <label>{todo.text}</label>
                                <button className="destroy" onClick={() => handleDelete(todo)} ></button>
                            </div>
                        </li>
                    )}
                    

                </ul>
                
            </section>
        </div>
    )
}

export default List
