import { combineEpics } from 'redux-observable';

import * as counter from '../features/counter/epics';
import * as user from '../features/user/epics';

export default combineEpics(...Object.values(counter), ...Object.values(user));
