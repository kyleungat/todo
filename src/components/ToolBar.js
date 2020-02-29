import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../redux/action/todoActions'

function ToolBar() {
    const dispatch = useDispatch();
    const past = useSelector(state => state.todo.past);
    const future = useSelector(state => state.todo.future);

    return (
        <div className="toolbar">
            {/* <i className="fas fa-list-ol"></i> */}
            <i className="fas fa-plus-square" onClick={() => { dispatch(addTodo()) }}></i>
            {/* <i className="fas fa-trash-alt trash">
                <span className="trash-number">2</span>
            </i> */}
            {past.length > 0? 
                <i className={"fas fa-undo"} onClick={() => {dispatch({ type: "UNDO" })}}></i>
            :   <i className={"fas fa-undo disabled"} ></i>
            }
            {future.length > 0? 
                <i className={"fas fa-redo"} onClick={() => {dispatch({ type: "REDO" })}}></i>
            :   <i className={"fas fa-redo disabled"} ></i>
            }

        </div>
    )
}

export default ToolBar
