import { createStore } from 'redux';
import reducer from '../reducers';
//takes in a reducer
export default createStore(reducer)