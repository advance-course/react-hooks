import React, { createContext, useState, Dispatch, ReactNode } from 'react';

interface Injected {
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
  const [unreadIndex, setUnreadIndex] = useState(0);
  const [unreadHot, setUnreadHot] = useState(0);

  const value = {
    unreadIndex,
    setUnreadIndex,
    unreadHot,
    setUnreadHot,
  }

  return (
    <ctx.Provider value={value}>{children}</ctx.Provider>
  )
}