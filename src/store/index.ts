import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './root-reducer';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './root-epic';
import { MyTypes } from './app-types';

export const history = createBrowserHistory();

export const epicMiddleware = createEpicMiddleware<
	MyTypes.RootAction,
	MyTypes.RootAction,
	MyTypes.RootState
>();

const appliedMiddleware = applyMiddleware(
	...[epicMiddleware, routerMiddleware(history)]
);
const composeWith =
	process.env.NODE_ENV === 'development'
		? composeWithDevTools(appliedMiddleware)
		: compose(appliedMiddleware);

export const configureStore = (
	preloadedState: Partial<MyTypes.RootState> = {}
) => createStore(createRootReducer(history), preloadedState as MyTypes.RootState, composeWith);

// override the parameter if you desire a different initial state for your store
const store = configureStore(/*override this parameter if you desire different initial state for your store */);

epicMiddleware.run(rootEpic);

export default store;
