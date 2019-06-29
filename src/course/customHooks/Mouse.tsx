import React, { Component, useState, useEffect } from 'react';
import withMousePos from './withMousePos';

interface Props {
  y: number,
  children?: any
}

export default function LazyLoadBox({ y, children }: Props) {
  const [viewRef, setView] = useState();
  const [lazyload, setLazyload] = useState();

  useEffect(() => {
    // xxxx y and viewRef.nativeEvent.clientY
    setLazyload(true)
  }, [y]);

  return (
    <View onLayout={ref => ref && setView(ref)}>
      {lazyload ? null : children}
    </View>
  )
}