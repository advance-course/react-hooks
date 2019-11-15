import combineReducer from './combineReducer';

interface Action {
  type: string,
  payload: number
}

const stateA: number = 0

function reducerA(state = stateA, action: Action) {
  switch (action.type) {
    case 'incrementA': 
      return state + action.payload
    case 'decrementA':
      return state - action.payload
    default:
      return state;
  }
}

const stateB: number = 0

function reducerB(state = stateB, action: Action) {
  switch (action.type) {
    case 'incrementB': 
      return state + action.payload
    case 'decrementB':
      return state - action.payload
    default:
      return state;
  }
}

export default combineReducer({reducerA, reducerB});