import { createReducer } from 'typesafe-actions';

const initState: AppFeatures.User[] = [];

export default createReducer(initState)
  .handleType('user/SET_USERS', (state, action) => {
    return action.payload.users;
  })

  .handleType('user/RESET_USER', () => {
    return [] as AppFeatures.User[];
  });
