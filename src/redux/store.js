
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzas = (state = [], action) => {
  if (action.type === "SET_PIZZAS") {
    return action.payload;
  }
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
  if (action.type === 'ADD_PIZZA_TO_ORDER') {
    return [...state, action.payload];
  }
  if (action.type === 'REMOVE_PIZZA_FROM_ORDER') {
    let removePizza = action.payload;
    let newPizzaArray = state.filter((pizza) => {
      if (removePizza.id !== pizza.id) {
        return true;
      } else {
        return false;
      }
    })
    return newPizzaArray;
  }
  return state;
}

const store = createStore(
  combineReducers({
    pizzas, 
    currentOrderForm,
    currentOrderlineItem
  }),
  applyMiddleware(logger),
);


export default store;
