import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('../store/root-action').default>;
    RootState: StateType<
      ReturnType<typeof import('../store/root-reducer').default>
    >;
    Store: StateType<typeof import('../store').default>;
  }
}
