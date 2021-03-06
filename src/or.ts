import { Pred } from './types'

interface OrFunction {
  <T>(f1: Pred<T>): Pred<T>
  <T1, T2>(f1: Pred<T1>, f2: Pred<T2>): Pred<T1 | T2>
  <T1, T2, T3>(f1: Pred<T1>, f2: Pred<T2>, f3: Pred<T3>): Pred<T1 | T2 | T3>
  <T1, T2, T3, T4>(
    f1: Pred<T1>,
    f2: Pred<T2>,
    f3: Pred<T3>,
    f4: Pred<T4>,
  ): Pred<T1 | T2 | T3 | T4>
  <T1, T2, T3, T4, T5>(
    f1: Pred<T1>,
    f2: Pred<T2>,
    f3: Pred<T3>,
    f4: Pred<T4>,
    f5: Pred<T5>,
  ): Pred<T1 | T2 | T3 | T4 | T5>
}

export const or = ((...funcs: Pred<any>[]) => {
  return (val: any) => {
    for (const f of funcs) {
      if (f(val)) {
        return true
      }
    }
    return false
  }
}) as OrFunction
