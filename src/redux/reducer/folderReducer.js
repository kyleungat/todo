import { ADD_FOLDER, DELETE_FOLDER, RENAME_FOLDER } from '../action/folderActions'

const initState = {
    nextId: 3,
    folders: [
        {
            id: 0,
            name: "nba",
        },
        {
            id: 1,
            name: "football",
        },
        {
            id:2,
            name: "baseball",
        },
    ]
}

const folderReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_FOLDER:
            const folder = {id: state.nextId, name: action.payload.name};
            return {
                nextId: state.nextId+1,
                folders: [folder, ...state.folders]
            };

        case DELETE_FOLDER: {
            const temp = state.folders.filter(element => element.id !== action.payload)
            return {
                ...state,
                folders:temp,
            }
        }
        case RENAME_FOLDER: {
            let temp = state.folders.map( element => {
                if (element.id === action.payload.id){
                    return {
                        id: element.id,
                        name: action.payload.name,
                    };
                }
                else {
                    return element;
                }
            });

            return {
                ...state,
                folders: temp,
            }
        }
        
        default: return state;
    }
};

export default folderReducer;