import { combineReducers } from 'redux';
import Library from './library';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: Library,
  selectedId: SelectionReducer
});
