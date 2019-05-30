import React, { useState } from 'react';
import usePageTitle from './usePageTitle';
import useCounter from './useCouter';
import './style.scss';

interface Postion {
  x: number,
  y: number
}

export default function AnimateDemo() {
  const def = { x: 0, y: 0 };
  const [startPointPos, setStartPointPos] = useState<Postion>(def);
  const [curPos, setCurPos] = useState<Postion>(def);
  const [startElePos, setStartElePos] = useState(def);

  usePageTitle(`x位置: ${curPos.x}`);
  const coutner = useCounter(curPos.x);

  function start(e: any) {
    setStartPointPos({ x: e.clientX, y: e.clientY });
  }

  function move(e: any) {
    if (!e.clientX && !e.clientX) {
      return;
    }

    const dis = {
      x: e.clientX - startPointPos.x,
      y: e.clientY - startPointPos.y
    }

    setCurPos({
      x: startElePos.x + dis.x,
      y: startElePos.y + dis.y
    })
  }

  function end(e: any) {
    setStartElePos(curPos);
  }

  return (
    <div className="container">
      <div>白色方块位置变动次数：{coutner}</div>
      <div 
        className="el" 
        onDragStart={start}
        onDrag={move}
        onDragEnd={end}
        style={{ left: `${curPos.x}px`, top: `${curPos.y}px` }}
        draggable
      />
    </div>
  )
}
