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
