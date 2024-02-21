// store.js
import { createStore } from 'redux';

const initialState = {
  isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':{
      console.log("in logIN")
      console.log({
        ...state, isLoggedIn: true
      })
      return { ...state, isLoggedIn: true };
    }
    case 'LOG_OUT':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
