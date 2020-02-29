import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from '../redux/action/todoActions'

function Todo({ todo }) {
    const dispatch = useDispatch();
    const [text, setText] = useState(todo.text);
    const [isChecked, setIsChecked] = useState(todo.isComplete);

    return (
        <div className="todo">
            <i className="fas fa-minus-circle delete" onClick={() => {dispatch(deleteTodo(todo.id))}}></i>
            <input className="check" type="checkbox" checked={isChecked} onChange={()=>{setIsChecked(!isChecked); dispatch(toggleTodo(todo.id))}} />
            <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} onBlur={(e) => {
                if (e.target.value !== todo.text) {
                    dispatch(editTodo(e.target.value, todo.id))
                }
            }}/>
        </div>
    )
}

export default Todo
