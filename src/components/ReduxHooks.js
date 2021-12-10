import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, subtract } from '../redux/actionCreators';

function ReduxHooks() {
  const dispatch = useDispatch();
  const counterReducer = useSelector((state) => {
    return state.counterReducer;
  });

  console.log('tHIS CAME FROM USE SELECTOR', counterReducer);
  return (
    <div>
      <h1>REDUX HOOKS TESTING</h1>
      <p>{counterReducer.message}</p>
      <p>The count is: {counterReducer.count}</p>
      <button onClick={() => dispatch(add())}>ADD</button>
      <button onClick={() => dispatch(subtract())}>SUBTRACT</button>
    </div>
  );
}

export default ReduxHooks;
