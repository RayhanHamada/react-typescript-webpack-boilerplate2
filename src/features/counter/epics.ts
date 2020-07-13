import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';
import { increment } from './actions';
import { MyTypes } from 'src/types/app-types';

export const asyncIncrement: MyTypes.AppEpic = action$ =>
  action$.pipe(
    ofType('counter/ASYNC_INCREMENT'),
    delay(2000),
    mapTo(increment())
  );
