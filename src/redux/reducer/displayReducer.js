import {SET_DISPLAY} from '../action/displayActions'

// const initState = 0;

const displayReducer = (state = null, action) => {
    switch (action.type) {
        case SET_DISPLAY: {
            return action.payload.id;
        }
        default: return state;
    }
}

export default displayReducer