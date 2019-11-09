import axios from 'axios';

interface Base {
  id?: number,
  ga_prefix?: string,
  hint?: string,
  image_hue?: string,
  title?: string,
  type?: number,
  url?: string,
}

export interface Story extends Base {
  images?: string[]
}

export interface TopStory extends Base {
  image?: string
}

export interface Feed {
  date: string,
  stories: Story[],
  top_stories: TopStory[]
}

export function zhLastFeedApi(): Promise<Feed> {
  return axios.get('https://news-at.zhihu.com/api/4/news/latest').then(res => {
    return res.data;
  });
}