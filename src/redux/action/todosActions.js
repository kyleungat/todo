export const UPDATE_TODOS = "UPDATE_TODOS";
export const updateTodos = (folderId, item) => {
    return {
        type: UPDATE_TODOS,
        payload: {
            folderId: folderId,
            item: item,
        }
    }
}