import { createReducer } from 'typesafe-actions';

const initialState: AppFeatures.Counter = {
  count: 0,
};

const counterReducer = createReducer(initialState)
  .handleType('counter/INCREMENT', state => {
    return {
      ...state,
      count: state.count + 1,
    };
  })

  .handleType('counter/DECREMENT', state => {
    return {
      ...state,
      count: state.count - 1,
    };
  })

  .handleType('counter/INCREMENT_BY', (state, action) => {
    return {
      ...state,
      count: state.count + action.payload.by,
    };
  })

  .handleType('counter/DECREMENT_BY', (state, action) => {
    return {
      ...state,
      count: state.count - action.payload.by,
    };
  });

export default counterReducer;
