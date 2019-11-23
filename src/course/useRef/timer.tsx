import React, { useRef, useEffect } from 'react';

export default function Timer() {
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      console.log('do something');
    }, 1000);

    // 组件卸载时，清除定时器
    return () => {
      timerRef.current && clearInterval(timerRef.current);
    }
  }, []);

  return (
    <div>
      // ...
    </div>
  )
}