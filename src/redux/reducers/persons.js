import { ADD_PERSON } from "../constants";

const initState = [{id: '001', name: 'Tom', age: 20}];

export default (prevState = initState, action) => {
    const {type, data} = action;
    switch(type) {
        case ADD_PERSON: 
            return [...prevState, data];
        default:
            return prevState;
    }
}