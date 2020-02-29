export const SET_DISPLAY = "SETDISPLAY";
export const setDisplay = (id) => {
    return {
        type: SET_DISPLAY,
        payload: id,
    }
};

export const SET_DISPLAY_AND_TODO = "SET_DISPLAY_AND_TODO";
export const setDisplayAndTodo = (id) => {
    return (dispatch, getState) => {
        const state = getState();
        const todo = state.todos.find(element => element.id === id);
        dispatch({
            type: SET_DISPLAY,
            payload: {
                id: id,
                item: todo,
            }
        })
    }
}
