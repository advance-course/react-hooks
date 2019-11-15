import {useState, useEffect} from 'react';
import {zhLastFeedApi, Feed} from './api';

export default function useFeed() {
  const [feed, setFeed] = useState<Feed>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 做一个优化判断
    if (!loading) {
      return;
    }
    zhLastFeedApi().then(res => {
      setLoading(false);
      setFeed(res);
    })
  }, [loading]);

  return {feed, setLoading, loading};
}

/** 判断两个数组是否相等 */
export function equal(a: number[], b: number[]) {
  if (a.length !== b.length) {
    return false;
  }
  if (a.length === 0 && b.length === 0) {
    return true;
  }

  return a.every((item, i) => item === b[i]);
}