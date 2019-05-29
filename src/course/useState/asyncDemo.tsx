import React, { useState } from 'react';

const listApi = function() {}

interface ListItem {
  name: string,
  id: number,
  thumb: string
}

interface Param {
  current?: number,
  pageSize?: number,
  name?: string,
  id?: number,
  time?: Date
}

// 定义为同步变量
let param: Param = {}

export default function AsyncDemo() {
  const [listData, setListData] = useState<ListItem[]>([]);
  
  function fetchListData() {
    // @ts-ignore
    listApi(param).then(res => {
      setListData(res.data);
    })
  }

  function searchByName(name: string) {
    param = { ...param, name };
    fetchListData();
  }

  return [
    <div>data list</div>,
    <button onClick={() => searchByName('Jone')}>search by name</button>
  ]
}