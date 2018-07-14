import { FETCH_ACTION_TYPE } from '../actions/index'

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_ACTION_TYPE: {
            console.log(action.payload);
            if (action.payload.status === 200) {
                return [action.payload.data, ...state];
            }
        }
    }
    return state;
}