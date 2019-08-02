import React, { createContext, ReactNode, useState, Dispatch } from 'react';

interface Injected {
  counter: number,
  setCounter: Dispatch<any>,
  increment: () => any,
  decrement: () => any
}

export const contenxt = createContext<Injected>({} as Injected);

interface Props {
  children?: ReactNode
}

export function CounterProvider({ children }: Props) {
  const [counter, setCounter] = useState(0);

  const value = {
    counter,
    setCounter,
    increment: () => setCounter(counter + 1),
    decrement: () => setCounter(counter - 1)
  }

  return (
    <contenxt.Provider value={value}>{children}</contenxt.Provider>
  )
}