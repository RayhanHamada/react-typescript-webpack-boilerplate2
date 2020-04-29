import { ofType } from 'redux-observable';
import { fetchUser } from '../../api/user-fetch';
import { mergeMap, map } from 'rxjs/operators';
import { from } from 'rxjs';

import { setUsers } from './actions';
import { MyTypes } from 'src/store/app-types';

export const fetchUserEpic: MyTypes.AppEpic = action$ =>
  action$.pipe(
    ofType('user/FETCH_USER'),
    mergeMap(() =>
      from(fetchUser()).pipe(map(res => setUsers(res as AppFeatures.User[])))
    )
  );
