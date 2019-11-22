import React, { createContext, useState, Dispatch, ReactNode } from 'react';

interface Injected {
  tabIndex: number,
  setTabindex: Dispatch<any>,
  counter: number,
  setCounter: Dispatch<any>,
  increment: () => any,
  decrement: () => any
}

export const ctx = createContext<Injected>({} as Injected);

interface Props {
  children?: ReactNode
}

export function Provider({children}: Props) {
  const [tabIndex, setTabindex] = useState(0);
  const [counter, setCounter] = useState(0);

  const value = {
    tabIndex, 
    setTabindex,
    counter,
    setCounter,
    increment: () => setCounter(counter + 1),
    decrement: () => setCounter(counter - 1)
  }

  return (
    <ctx.Provider value={value}>{children}</ctx.Provider>
  )
}