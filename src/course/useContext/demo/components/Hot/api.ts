import axios from 'axios';

interface Story {
  id?: number,
  ga_prefix?: string,
  hint?: string,
  image_hue?: string,
  title?: string,
  type?: number,
  url?: string,
  images?: string[]
  image?: string
}

export interface Feed {
  date: string,
  stories: Story[],
  top_stories: Story[]
}

export function topViewApi(): Promise<any> {
  return axios.get('http://wcf.open.cnblogs.com/blog/48HoursTopViewPosts/10').then(res => {
    return res.data;
  });
}