
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzas = (state = [], action) => {
  return state;
}

const total = (state = [], action) => {
  return state;
}

const currentOrderForm = (state = [], action) => {
  if (action.type === 'SET_USER_INPUT_VALUES') {
//assign the user input values recieved to the variable
    const userOrderform =  action.payload

    console.log(userOrderform)

    return userOrderform
  }

  return state;
}

const currentOrderlineItem = (state = [], action) => {
  return state;
}

const store = createStore(
  combineReducers({
    pizzas, 
    total,
    currentOrderForm,
    currentOrderlineItem
  }),
  applyMiddleware(logger),
);


export default store;
