import {combineReducers} from 'redux';
import expenseReducer, {expenseInitialState} from './expense';

export const rootReducer = combineReducers({
  expense: expenseReducer,
});

export const getInitialState = () => ({
  expense: expenseInitialState,
});
