import React from 'react';
import { bindActionCreators } from 'redux';
import * as counter from '../features/counter/actions';
import * as user from '../features/user/actions';
import { connect } from 'react-redux';
import { history } from '../store';
import { MyTypes } from 'src/types/app-types';
import { CompRelated } from 'src/types/component-related';

const mapStateToProps = ({ counter, user }: MyTypes.RootState) => {
  return {
    count: counter.count,
    users: user,
  };
};

const mapDispatchToProps = (dispatch: MyTypes.AppDispatch) =>
  bindActionCreators(
    {
      increment: counter.increment,
      decrement: counter.decrement,
      asyncIncrement: counter.asyncIncrement,
      fetchUsers: user.fetchUsers,
      resetUsers: user.resetUsers,
    },
    dispatch
  );

type Props = CompRelated.Props<
  typeof mapStateToProps,
  typeof mapDispatchToProps
>;

const Home = (props: Props) => {
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
