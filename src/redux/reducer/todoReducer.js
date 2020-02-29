import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from '../action/todoActions'
import { SET_DISPLAY } from '../action/displayActions'

function undoable(reducer) {
    const initialState = {
        past: [],
        present: reducer(undefined, {}),
        future: []
    }

    return function (state = initialState, action) {
        const { past, present, future } = state

        switch (action.type) {
            case "UNDO":
                const previous = past[past.length - 1];
                const newPast = past.slice(0, past.length - 1);
                return {
                    past: newPast,
                    present: previous,
                    future: [present, ...future],
                }

            case "REDO":
                const next = future[0];
                const newFuture = future.slice(1)
                return {
                    past: [...past, present],
                    present: next,
                    future: newFuture,
                }
            case SET_DISPLAY: 
                return {
                    past: [],
                    present: action.payload.item,
                    future: [],
                }
            
            default:
                const newPresent = reducer(present, action);
                if (present === newPresent) {
                    return state
                }
                return {
                    past: [...past, present],
                    present: newPresent,
                    future: []
                }

        }
    }
}

const initState = {};

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const todo = { id: state.nextId, text: "", isComplete: false }
            return {
                ...state,
                nextId: state.nextId + 1,
                list: [
                    todo,
                    ...state.list,
                ]
            }
        }
        case DELETE_TODO: {
            const temp = state.list.filter(element => element.id !== action.payload)

            return {
                ...state,
                list: temp,
            };
        }
        case TOGGLE_TODO: {
            const temp = state.list.map(element => {
                if (element.id === action.payload) {
                    return {
                        ...element,
                        isComplete: !element.isComplete,
                    }
                }
                else {
                    return element
                }
            })

            return {
                ...state,
                list: temp,
            };
        }
        case EDIT_TODO: {
            const temp = state.list.map(element => {
                if (element.id === action.payload.todoId) {
                    return {
                        ...element,
                        text: action.payload.text,
                    }
                }
                else {
                    return element
                }
            })

            return {
                ...state,
                list: temp,
            };
        }
        default:
            return state;
    }
}

export default undoable(todoReducer);