export function summation(target: number) {
  let sum = 0;
  for(let i = 1; i <= target; i++) {
    sum += i;
  }
  return sum;
}

// 初始化一个非正常数字，用于缓存上一次的计算结果
let preTarget = -1;
let memoSum = 0;

export function memoSummation(target: number) {
  // 如果传入的参数与上一次一样，直接换回缓存结果
  if (preTarget > 0 && preTarget === target) {
    return memoSum;
  }

  console.log('我出现，就表示重新计算了一次');
  // 缓存本次传入的参数
  preTarget = target;
  let sum = 0;
  for (let i = 1; i <= target; i++) {
    sum += i;
  }
  // 缓存本次的计算结果
  memoSum = sum;
  return sum;
}
