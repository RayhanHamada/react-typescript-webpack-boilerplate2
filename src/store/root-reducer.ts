import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import counter from '../features/counter/reducer';
import user from '../features/user/reducer';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    counter,
    user,
  });

export default createRootReducer;
