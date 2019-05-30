import { useState, useEffect } from 'react';

// 用于记录某个值的变化次数
export default function useCounter(par: any) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(counter + 1);
  }, [par]);

  return counter;
}