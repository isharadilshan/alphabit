import {GET_EXPENSES, SET_EXPENSES} from '../../action-types';

export const getExpenses = () => {
  return {type: GET_EXPENSES};
};

export const setExpenses = (payload: any) => {
  return {type: SET_EXPENSES, payload};
};
