import axios from 'axios';

// ACTION TYPES
const SET_CURRENT_PIN = 'SET_CURRENT_PIN';


// ACTION CREATORS
export const selectedPin = pin => ({ type:SET_CURRENT_PIN, pin});

// REDUCER
export default (selectedPin={}, action) => {
  switch(action.type){
    case SET_CURRENT_PIN: return action.pin; 
    default: return selectedPin; 
  }
}

//THUNK
export const fetchSinglePin = pinId => dispatch => {
  return axios.get(`/api/pins/${pinId}`)
  .then(res => res.data)
  .then(pin => {
    dispatch(selectedPin(pin));
  })
  .catch(console.error);
}