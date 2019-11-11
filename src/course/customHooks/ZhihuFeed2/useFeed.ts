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