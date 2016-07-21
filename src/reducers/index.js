import { combineReducers } from 'redux';
import friendlist from './friendlist'

const friends = combineReducers({
  friendlist,
});

export default friends;
