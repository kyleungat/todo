import React from 'react'
import Todo from './Todo'

function TodoList({todolist, folderId}) {
    return (
        <div className="todo-list">
            {todolist && todolist.map((element) => {
                return <Todo key={`${folderId}${element.id}`} todo={element} />
            })}
        </div>
    )
}

export default TodoList
