import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import tableData from './tableDataReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  tableData,
  routing: routerReducer
});

export default rootReducer;
