import { StateType, ActionType } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import { Dispatch } from 'redux';

declare namespace MyTypes {
  type Store = StateType<typeof import('../store').default>;
  type RootAction = ActionType<typeof import('../store/root-action').default>;
  type RootState = StateType<
    ReturnType<typeof import('../store/root-reducer').default>
  >;
  type AppDispatch = Dispatch<RootAction>;
  type AppEpic = Epic<RootAction, RootAction, RootState>;
}
