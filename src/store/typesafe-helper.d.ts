import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
	interface Types {
		RootAction: ActionType<typeof import('./root-action').default>;
		RootState: StateType<ReturnType<typeof import('./root-reducer').default>>;
		Store: StateType<typeof import('.').default>;
	}
}
