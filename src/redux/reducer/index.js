import {combineReducers} from 'redux'
import folderReducer from './folderReducer'
import displayReducer from './displayReducer'
import todosReducer from './todosReducer'
import todoReducer from './todoReducer'

const todoApp = combineReducers({
    folders: folderReducer,
    display: displayReducer,
    todos: todosReducer,
    todo: todoReducer,
})

// const initState = {
//     display: 0,
//     folders: {
//         nextId: 0,
//         folders: [],
//     },
//     todos: [],
// }

// const todoApp = (state = initState, action) => {
//     switch (action.type) {
//         case SET_DISPLAY: {
//             return {
//                 ...state,
//                 display: displayReducer(state.display, action),
//             }
//         }
//         case ADD_FOLDER: {
//             return {
//                 ...state,
//                 folders: 
//             }
//         }

//     } 
// }

export default todoApp