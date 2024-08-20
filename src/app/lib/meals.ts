import Meal, { dummyMeals } from '@/src/model/Meal';

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return dummyMeals;
}

export async function getMeal(slug: string): Promise<Meal | null> {
  const resultMeal = dummyMeals.find((meal) => meal.slug == slug);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return resultMeal ?? null;
}
