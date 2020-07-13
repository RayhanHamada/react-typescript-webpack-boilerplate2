import { createReducer } from 'typesafe-actions';

const initState: Features.User[] = [];

const reducer = createReducer(initState)
  .handleType('user/SET_USERS', (state, action) => {
    return action.payload.users;
  })

  .handleType('user/RESET_USER', () => {
    return [];
  });

export default reducer;
