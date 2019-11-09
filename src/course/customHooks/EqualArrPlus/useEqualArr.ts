import { useState } from 'react';

function equalArr(a: number[], b: number[]) {
  if (a.length !== b.length) {
    return false;
  }
  if (a.length === 0 && b.length === 0) {
    return true;
  }
  return a.every((item, i) => item === b[i]);
}


export default function useEqualArr() {
  const [arrA, setArrA] = useState<number[]>([]);
  const [arrB, setArrB] = useState<number[]>([]);
  const isEqual = equalArr(arrA, arrB);

  return {
    arrA,
    setArrA,
    arrB,
    setArrB,
    isEqual
  }
}