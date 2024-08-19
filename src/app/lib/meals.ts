import Meal, { dummyMeals } from '@/src/model/Meal';

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return dummyMeals;
}
