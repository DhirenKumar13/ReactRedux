import { FETCH_TYPE } from '../actions';
import _ from 'lodash';

export default function (state = {}, action ) {
    switch(action.type) {
        case FETCH_TYPE :
            return _.mapKeys(action.payload.data , "id");
        default :
            return state;
    }
}