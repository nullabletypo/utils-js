import { hasIn } from '../src/hasIn'

const src = {
  obj: { a: 'a', b: 'b' },
  arr: [{ prop: 'a' }, { prop: 'b' }],
}

test('hasIn', () => {
  expect(hasIn(src, ['obj'])).toBe(true)
  expect(hasIn(src, ['obj', 'a'])).toBe(true)
  expect(hasIn(src, 'arr.0.prop')).toBe(true)
  expect(hasIn(src, 'obj.a.b.c.d')).toBe(false)
})
