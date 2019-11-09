/** 对比两个数组是否相等 */
import React from 'react';
import {Button, Flex, Card} from 'antd-mobile';
import useEqualArr from './useEqualArr';
import './style.scss';

export default function EqualArr() {
  const {arrA, arrB, setArrA, setArrB, isEqual} = useEqualArr();

  return (
    <Flex className="queal_arr_container" justify="between" align="start">
      <Card className="inner left" title="左边数组arrA">
        <Button className="btn" onClick={() => setArrA([...arrA, 1])}>新增数字1到arrA</Button>
        {arrA.map((item, i) => (
          <div className="item" key={i}>{item}</div>
        ))}
        <Button className="btn" onClick={() => setArrA([...arrA, 2])}>新增数字2到arrA</Button>
      </Card>

      <Flex className="middle" justify="center" align="center">{isEqual.toString()}</Flex>

      <Card className="inner right" title="右边数组arrB">
        <Button className="btn" onClick={() => setArrB([...arrB, 1])}>新增数字1到arrB</Button>
        {arrB.map((item, i) => (
          <div className="item" key={i}>{item}</div>
        ))}
        <Button className="btn" onClick={() => setArrB([...arrB, 2])}>新增数字2到arrB</Button>
      </Card>
    </Flex>
  )
}