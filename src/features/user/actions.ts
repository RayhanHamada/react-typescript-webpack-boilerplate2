import { createAction } from 'typesafe-actions';

export const fetchUsers = createAction('user/FETCH_USER')();

export const setUsers = createAction(
	'user/SET_USERS',
	(users: AppFeatures.User[]) => {
		return {
			users,
		};
	}
)();

export const resetUsers = createAction('user/RESET_USER')();
