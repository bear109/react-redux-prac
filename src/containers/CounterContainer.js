import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { decrease, increase } from '../modules/counter';
import { useSelector, useDispatch } from 'react-redux';

function CounterContainer() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return <Counter number={number} onIncrease={() => dispatch(increase())} onDecrease={() => dispatch(decrease())} />;
}

export default CounterContainer;
