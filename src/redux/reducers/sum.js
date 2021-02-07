import { INCREMENT, DECREMENT } from "../constants";

const initState = 0;

export default (prevState = initState, action) => {
    const {type, data} = action;
    switch(type) {
        case INCREMENT:
            return prevState + data;
        case DECREMENT:
            return prevState - data;
        default: 
            return prevState;
    }
}