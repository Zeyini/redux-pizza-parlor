import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzas = (state = [], action) => {
  return state;
}

const total = (state=0, action) => { 
  if (action.type === 'ADD_TO_TOTAL') {
    let totalCost = state + action.payload;
    return totalCost;
  } else if (action.type === 'SUBTRACT_FROM_TOTAL') {
    return 
  }
  return state;
}

const currentOrderForm = (state = [], action) => {
  return state;
}

const currentOrderlineItem = (state = [], action) => {
  if (action.type === 'ADD_PIZZA_TO_ORDER') {
    return [...state, action.payload];
  }
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
