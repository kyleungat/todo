export const ADD_TODO = "ADD_TODO"
export const addTodo = () => {
    return {
        type: ADD_TODO,      
    }
}

export const DELETE_TODO = "DELETE_TODO"
export const deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        payload: todoId,
    }
}

export const TOGGLE_TODO = "TOGGLE_TODO"
export const toggleTodo = (todoId) => {
    return {
        type: TOGGLE_TODO,
        payload: todoId,
    }
}

export const EDIT_TODO = "EDIT_TODO"
export const editTodo = (text, todoId) => {
    return {
        type: EDIT_TODO,
        payload: {
            text: text,
            todoId: todoId,
        }
    }
}

