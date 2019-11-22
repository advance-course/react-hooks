import React, { createContext, useState, Dispatch, ReactNode } from 'react';

interface Injected {
  tabIndex: number,
  setTabindex: Dispatch<any>,
  unreadIndex: number,
  setUnreadIndex: Dispatch<any>,
  unreadHot: number,
  setUnreadHot: Dispatch<any>,
}

export const ctx = createContext<Injected>({} as Injected);

interface Props {
  children?: ReactNode
}

export function Provider({children}: Props) {
  const [tabIndex, setTabindex] = useState(0);
  const [unreadIndex, setUnreadIndex] = useState(0);
  const [unreadHot, setUnreadHot] = useState(0);

  const value = {
    tabIndex,
    setTabindex,
    unreadIndex,
    setUnreadIndex,
    unreadHot,
    setUnreadHot,
  }

  return (
    <ctx.Provider value={value}>{children}</ctx.Provider>
  )
}