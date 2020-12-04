import {SET_CHARACTERS, ADD_CHARACTER} from '../types';
//reducers take state and action and body is switch statement
export const characters = (state=[], action) => {
  switch(action.type){
  case SET_CHARACTERS:
    return action.payload
  case ADD_CHARACTER:
    return [...state, action.character]
  default: 
    return state
  }
}