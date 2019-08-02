import React, { createContext, ReactNode, useReducer } from 'react';

const initialState: number = 0;
const reduer = (state: number, action: string) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
  }
}

interface Injected {
  counter: number,
  increment: () => any,
  decrement: () => any,
  reset: () => any
}

export const contenxt = createContext<Injected>({} as Injected);

interface Props {
  children?: ReactNode
}

export function CounterProvider({ children }: Props) {
  // @ts-ignore
  const [counter, dispatch] = useReducer(reduer, initialState);

  const value = {
    counter,
    increment: () => dispatch('increment'),
    decrement: () => dispatch('decrement'),
    reset: () => dispatch('reset')
  }

  return (
    <contenxt.Provider value={value}>{children}</contenxt.Provider>
  )
}