import React from "react";

function TodoList({todos}) {
    return (
        <div>
            <ul>
                {todos.map(todo=>(<li key={todo.no}>{todo.memo}</li>))}
            </ul>
        </div>
    )
}
export default TodoList;