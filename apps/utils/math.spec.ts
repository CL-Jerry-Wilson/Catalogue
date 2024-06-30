// File: apps/utils/math.spec.ts
import { add } from './math';

describe('add function', () => {
  it('correctly adds two numbers', () => {
    expect(add(1, 1)).toBe(2);
  });
});
