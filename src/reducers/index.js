import { combineReducers } from 'redux';
import tableData from './tableDataReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  tableData,
  routing: routerReducer
});

export default rootReducer;
