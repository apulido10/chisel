import { describe, it, expect } from 'vitest';
import {
  addDays,
  getNextDay,
  getPreviousDay,
  getSameWeekdayLastWeek,
} from './dates';

describe('getNextDay', () => {
  it('returns the next day date', () => {
    expect(getNextDay('2026-10-11')).toBe('2026-10-12');
  });
  it('moves into the next month', () => {
    expect(getNextDay('2026-11-30')).toBe('2026-12-01');
  });

  it('moves into the next year', () => {
    expect(getNextDay('2026-12-31')).toBe('2027-01-01');
  });
});

describe('addDays', () => {
  it('returns the date of added days', () => {
    expect(addDays('2026-11-26', 12)).toBe('2026-12-08');
  });
  it('returns the day subtracted', () => {
    expect(addDays('2026-11-26', -6)).toBe('2026-11-20');
  });
  it('handles leap years', () => {
    expect(addDays('2028-02-28', 1)).toBe('2028-02-29');
    expect(addDays('2027-02-28', 1)).toBe('2027-03-01');
  });
});

describe('getPreviousDay', () => {
  it('returns previous day date', () => {
    expect(getPreviousDay('2026-11-26')).toBe('2026-11-25');
  });
  it('moves back into the previous month', () => {
    expect(getPreviousDay('2026-12-01')).toBe('2026-11-30');
  });

  it('moves back into the previous year', () => {
    expect(getPreviousDay('2027-01-01')).toBe('2026-12-31');
  });
});

describe('getSameWeekdayLastWeek', () => {
  it('get same day from previous week', () => {
    expect(getSameWeekdayLastWeek('2026-11-26')).toBe('2026-11-19');
    expect(getSameWeekdayLastWeek('2026-11-19')).toBe('2026-11-12');
  });
  it('moves back into the previous month', () => {
    expect(getSameWeekdayLastWeek('2026-12-03')).toBe('2026-11-26');
  });
});
