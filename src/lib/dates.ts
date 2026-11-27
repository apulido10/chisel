// change string to date
function parseDate(date: string): Date {
  const [year, month, day] = date.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

// change from date to string

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function addDays(date: string, days: number): string {
  const result = parseDate(date);
  result.setUTCDate(result.getUTCDate() + days);
  return formatDate(result);
}

export function getNextDay(date: string): string {
  return addDays(date, 1);
}

export function getPreviousDay(date: string): string {
  return addDays(date, -1);
}

export function getSameWeekdayLastWeek(date: string): string {
  return addDays(date, -7);
}

export function getToday(now: Date = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
