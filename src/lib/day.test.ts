import { describe, it, expect } from 'vitest';
import { createEmptyDay } from './day';

describe('createEmptyDay', () => {
  it('returns a blank page for the given date', () => {
    expect(createEmptyDay('2026-11-10')).toEqual({
      date: '2026-11-10',
      weight: null,
      calories: null,
      photo: null,
      sets: [],
    });
  });
});
