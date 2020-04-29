import { combineEpics } from 'redux-observable';

import * as counterEpic from '../features/counter/epics';
import * as userEpic from '../features/user/epics';

export default combineEpics(
	...Object.values(counterEpic),
	...Object.values(userEpic)
);
