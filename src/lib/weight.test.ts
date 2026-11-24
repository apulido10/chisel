import { describe, it, expect } from 'vitest';
import { getWeightForDate, type WeightEntry } from './weight';

const entries: WeightEntry[] = [
  { date: '2026-11-10', weight: 266 },
  { date: '2026-11-11', weight: 265.6 },
];

describe('getWeightForDate', () => {
  it('returns the weight logged on that date', () => {
    expect(getWeightForDate(entries, '2026-11-10')).toBe(266);
    expect(getWeightForDate(entries, '2026-11-11')).toBe(265.6);
  });
});

describe('getWeightForDate', () => {
  it('return null when nothing is logged', () => {
    expect(getWeightForDate(entries, '')).toBe(null);
  });
});

describe('getWeightForDate', () => {
  it('return null when nothing is logged', () => {
    expect(getWeightForDate([], '2026-11-10')).toBe(null);
  });
});
