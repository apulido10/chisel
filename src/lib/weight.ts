export type WeightEntry = {
date:string;
weight:number;
};

export function getWeightForDate(entries:WeightEntry[],date:string): number | null{
  const entry = entries.find((e)=> e.date === date);
  return entry ? entry.weight : null;
}