import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFolder, renameFolder } from '../redux/action/folderActions'
import { setDisplayAndTodo } from '../redux/action/displayActions'
import { updateTodos } from '../redux/action/todosActions'

function Folder({ folder }) {
    const [value, setValue] = useState(folder.name);
    const display = useSelector(state => state.display);
    const todo = useSelector(state => state.todo.present);
    const dispatch = useDispatch();

    return (
        <div className={`folder ${display === folder.id && "active"}`} onClick={() => { 
            if (display !== null) {
                dispatch(updateTodos(display, todo));
            }
            dispatch(setDisplayAndTodo(folder.id)) 
        }}>
            <input type="text" placeholder="new folder" value={value} onChange={(e) => setValue(e.target.value)}
                onBlur={() => {
                    if (value !== folder.name) {
                        dispatch(renameFolder(folder.id, value))
                    }
                }}
            />
            <i className="fas fa-trash-alt" onClick={(e) => { e.stopPropagation();dispatch(deleteFolder(folder.id)) }}></i>
        </div>
    )
}

export default Folder
