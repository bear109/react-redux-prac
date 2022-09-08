import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { decrease, increase } from '../modules/counter';

function CounterContainer({ number, increase, decrease }) {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = {
  increase,
  decrease,
};
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);