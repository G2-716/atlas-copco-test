import { useEffect, useRef } from 'react';

export function useDidMountEffect(callback, deps) {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      callback?.();
    } else {
      didMount.current = true;
    }
  }, deps);
}