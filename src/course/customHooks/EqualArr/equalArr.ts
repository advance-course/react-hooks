export default function equalArr(a: number[], b: number[]) {
  if (a.length !== b.length) {
    return false;
  }
  if (a.length === 0 && b.length === 0) {
    return true;
  }
  return a.every((item, i) => item === b[i]);
}
