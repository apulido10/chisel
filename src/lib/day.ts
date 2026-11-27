export type LoggedSet = {
  exercise: string;
  reps: number;
  weight: number;
};
export type Day = {
  date: string;
  weight: number | null;
  calories: number | null;
  photo: string | null;
  sets: LoggedSet[];
};

export function createEmptyDay(date: string): Day {
  return {
    date,
    weight: null,
    calories: null,
    photo: null,
    sets: [],
  };
}
