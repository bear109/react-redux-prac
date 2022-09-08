import { createAction, handleActions } from 'redux-actions';

//action
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//action 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//초기 상태
const initialState = {
  number: 0,
};

//Reducer
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
