import { SUBMIT_FORM, SUBMIT_PRICE_FORM } from '../Actions/types';

const INITIAL_STATE = {
    formdata: {},
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SUBMIT_FORM:
            return {
                ...state,
                formdata: action.payload,
            };
        case SUBMIT_PRICE_FORM:
            return {
                ...state,
                formdata: action.payload,
            }
        default:
            return state;
    }
}