import {useState, useEffect} from 'react';
import {zhLastFeedApi, Feed} from './api';

export default function useFeed() {
  
  const [feed, setFeed] = useState<Feed>();

  useEffect(() => {
    zhLastFeedApi().then(res => {
      setFeed(res);
    })
  }, []);

  return feed;
}