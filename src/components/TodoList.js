import React from 'react'
import Todo from './Todo'
import { CSSTransition, TransitionGroup} from 'react-transition-group';

function TodoList({ todolist, folderId }) {
    return (
        <div className="todo-list">
            <TransitionGroup>
                {todolist && todolist.map((element) => (
                    <CSSTransition
                        key={`${folderId}${element.id}`}
                        timeout={300}
                        classNames="item"
                    >
                    <Todo todo={element} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default TodoList
