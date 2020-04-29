import React from 'react';
import { bindActionCreators } from 'redux';
import * as counterActions from '../features/counter/actions';
import * as userAction from '../features/user/actions';
import { connect } from 'react-redux';
import { history } from '../store';
import { MyTypes } from 'src/store/app-types';

const mapStateToProps = ({
	counterReducer,
	userReducer,
}: MyTypes.RootState) => {
	return {
		count: counterReducer.count,
		users: userReducer,
	};
};

const mapDispatchToProps = (dispatch: MyTypes.AppDispatch) =>
	bindActionCreators(
		{
			increment: counterActions.increment,
			decrement: counterActions.decrement,
			asyncIncrement: counterActions.asyncIncrement,
			fetchUsers: userAction.fetchUsers,
			resetUsers: userAction.resetUsers,
		},
		dispatch
	);

type HomeProps = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

const Home = (props: HomeProps) => {
	return (
		<div id="wrapper-home">
			<p>Home Page</p>
			<p>{props.count}</p>
			<button onClick={() => history.push('/about')}>To About Page</button>
			<button onClick={props.increment}>Increment</button>
			<button onClick={props.decrement}>Decrement</button>
			<button onClick={props.asyncIncrement}>Async Increment</button>
			<br />
			<button
				onClick={ev => {
					ev.persist();
					props.fetchUsers();
				}}
			>
				Fetch User
			</button>
			<button
				onClick={ev => {
					ev.persist();
					props.resetUsers();
				}}
			>
				Reset User
			</button>
			<br />
			{props.users.map(user => (
				<p key={user.id}>{user.name}</p>
			))}
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
