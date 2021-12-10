import React from 'react';
import { connect } from 'react-redux';
import { add, subtract } from '../redux/actionCreators';

function ReduxClassic(props) {
  console.log('This is our props', props.counterReducer);
  return (
    <div>
      <h1>REDUX CLASSIC TESTING</h1>
      <p>{props.counterReducer.message}</p>
      <p>The count is: {props.counterReducer.count}</p>
      <button onClick={props.add}>ADD</button>
      <button onClick={() => props.subtract()}>SUBTRACT</button>
    </div>
  );
}

//pulls slices of the state
const mapStateToProps = (state) => {
  //returns an object of all the slices we need access to
  //return uses {}, and is thus an object
  return {
    //key: value
    counterReducer: state.counterReducer,
  };
};

//This is USUALLY not a function, just an object of the functions you want to call
//in our case, add and subtract
const mapDispatchToProps = {
  //key: value
  add: () => add(),
  subtract: () => subtract(),
};

//add connect at the bottom
//this will create a higher-order function

//takes 2 values: mapStateToProps, mapDispatchToProps

//mapStateToProps pulls the values to the redux store GET must be first argument
//mapDispatchToProps makes changes to the redux store POST must be secont argument

export default connect(mapStateToProps, mapDispatchToProps)(ReduxClassic);
