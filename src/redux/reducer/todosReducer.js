import { ADD_FOLDER, DELETE_FOLDER } from '../action/folderActions'
import { UPDATE_TODOS } from '../action/todosActions'

const initState = [
    {
        id: 0,
        nextId: 2,
        list: [
            {
                id: 0,
                text: "I love the game",
                isComplete: false,
            },
            {
                id: 1,
                text: "I don't love the game",
                isComplete: true,
            },
        ]
    },
    {
        id: 1,
        nextId: 2,
        list: [
            {
                id: 0,
                text: "I love the game",
                isComplete: false,
            },
            {
                id: 1,
                text: "I don't love the game",
                isComplete: false,
            },
        ]
    },
    {
        id: 2,
        nextId: 2,
        list: [
            {
                id: 0,
                text: "I love the game",
                isComplete: true,
            },
            {
                id: 1,
                text: "I don't love the game",
                isComplete: true,
            },
        ]
    },
]

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_FOLDER: {
            const folder = { id: action.payload.id,  nextId: 0, list: [] };
            return [
                ...state,
                folder
            ];
        }
        case DELETE_FOLDER: {
            const temp = state.filter(element => element.id !== action.payload);
            return temp
        }
        case UPDATE_TODOS: {
            const temp = state.map(element => {
                if (element.id === action.payload.folderId){
                    return action.payload.item
                }
                else {
                    return element
                }
            })           
            return temp;
        }
        
        default:
            return state;
    }
}

export default todoReducer;