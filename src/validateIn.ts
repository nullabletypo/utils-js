import { parsePath } from './internal/parsePath'
import { getIn } from './getIn'

interface ValidateInFunction {
  <T extends object, K extends keyof T>(
    src: T,
    path: K | K[],
    pred: (v: T[K]) => boolean,
  ): boolean
  <T extends object, K1 extends keyof T, K2 extends keyof T[K1]>(
    src: T,
    path: [K1, K2],
    pred: (v: T[K1][K2]) => boolean,
  ): boolean
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2]
  >(
    src: T,
    path: [K1, K2],
    pred: (v: T[K1][K2][K3]) => boolean,
  ): boolean
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3]
  >(
    src: T,
    path: [K1, K2],
    pred: (v: T[K1][K2][K3][K4]) => boolean,
  ): boolean
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4]
  >(
    src: T,
    path: [K1, K2],
    pred: (v: T[K1][K2][K3][K4][K5]) => boolean,
  ): boolean
  <T extends object>(src: T, path: string, pred: (v: any) => boolean): boolean
}

export const validateIn: ValidateInFunction = (
  src: Function | object,
  path: string | string[],
  pred: Function,
) => {
  const r = getIn(src, parsePath(path) as any)
  return pred(r)
}
