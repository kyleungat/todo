export const ADD_FOLDER = "ADD_FOLDER";
export const addFolder = (name, id) => {
    return {
        type: ADD_FOLDER,
        payload: {
            name: name,
            id: id,
        }
    };
}

export const DELETE_FOLDER = "DELETE_FOLDER";
export const deleteFolder = (id) => {
    return {
        type: DELETE_FOLDER,
        payload: id,
    };
}

export const RENAME_FOLDER = "RENAME_FOLDER";
export const renameFolder = (id, name) => {
    return {
        type: RENAME_FOLDER,
        payload: {
            id: id,
            name: name,
        }
    };
}

