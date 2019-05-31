import { useState, useEffect } from 'react';

/**
 * 记录组件的存活时间
 * @param {destory} Boolean 默认为false，当组件确认要被销毁时，传入true
 */
export default function useSurvivalTime(destory: boolean) {
  const [startTime] = useState(new Date().getTime());
  const [disTime, setDistime] = useState(0);

  useEffect(() => {
    if (destory) {
      const curTime = new Date().getTime();
      setDistime(curTime - startTime);
    }
  }, [destory]);

  return disTime;
}