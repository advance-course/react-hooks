import { useEffect, useState } from 'react';

export default function useEqual(a: number[], b: number[], q: boolean) {
  const [isEqual, setEqual] = useState<boolean>(false);

  useEffect(() => {
    if (q) {
      if (a.length != b.length) {
        return setEqual(false);
      }

      a.forEach((item, index) => {
        if (item != b[index]) {
          setEqual(false);
        }
      })
    }
  }, [q]);

  return isEqual;
}
