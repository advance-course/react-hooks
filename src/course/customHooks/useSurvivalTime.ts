import { useState, useEffect } from 'react';

/**
 * 记录组件的存活时间
 * @param {destory} Boolean 默认为false，当组件确认要被销毁时，传入true
 */
export default function useSurvivalTime() {
  const [startTime] = useState(new Date().getTime());

  useEffect(() => {
    return () => {
      const curTime = new Date().getTime();

      // 计算得到时差，通常的处理是调用埋点接口，将时差数据保存在服务端
      const disTime = curTime - startTime;
      // api(disTime); 调用埋点接口
    }
  }, []);
}