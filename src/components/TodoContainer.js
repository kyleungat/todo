import React from 'react'
import TodoList from './TodoList'
import ToolBar from './ToolBar'
import { useSelector } from 'react-redux'


function TodoContainer({isActive}) {
    const display = useSelector(state => state.display);
    const folders = useSelector(state => state.folders.folders);
    const todo = useSelector(state => state.todo.present);
    const folder = folders.find((element) => element.id === display);

    return (
        <div className={`todo-container ${isActive && "active"}`}>
            {folder ?
                <>
                <h2 className="title">{folder.name}</h2>
                <div className="hr"></div>
                <ToolBar />
                <TodoList todolist={todo.list} folderId={folder.id}/>
                <div className="copyright">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </>:
                <p className="splash-msg">select a folder</p>
            }
        </div>
    )
}

export default TodoContainer
