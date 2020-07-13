import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from '../store';
import React from 'react';

import { MyTypes } from 'src/types/app-types';

import { CompRelated } from 'src/types/component-related';
import * as counter from '../features/counter/actions';

const mapStateToProps = ({ counter }: MyTypes.RootState) => ({
  count: counter.count,
});

const mapDispatchToProps = (dispatch: MyTypes.AppDispatch) =>
  bindActionCreators(
    {
      increment: counter.increment,
      decrement: counter.decrement,
      asyncIncrement: counter.asyncIncrement,
    },
    dispatch
  );

type Props = CompRelated.Props<
  typeof mapStateToProps,
  typeof mapDispatchToProps
>;

const About = (props: Props) => {
  return (
    <div id="wrapper-about">
      <p>{props.count}</p>
      <button onClick={() => history.goBack()}>GoBack</button>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.asyncIncrement}>Async Increment</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
