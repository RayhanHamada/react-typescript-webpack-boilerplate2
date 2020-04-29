import counterReducer from '../features/counter/reducer';
import userReducer from '../features/user/reducer';
import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		counterReducer,
		userReducer,
	});

export default createRootReducer;
