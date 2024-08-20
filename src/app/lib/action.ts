'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { MealInput } from '@/src/model/Meal';

export async function sharedMeal(formData: FormData) {
  const title = getFormValue(formData, 'title');
  const summary = getFormValue(formData, 'summary');
  const instructions = getFormValue(formData, 'instructions');
  const creator = getFormValue(formData, 'name');
  const creator_email = getFormValue(formData, 'email');
  const image = formData.get('image');

  if (
    !title ||
    !summary ||
    !instructions ||
    !creator ||
    !creator_email ||
    !image ||
    !(image instanceof File)
  ) {
    throw new Error('Invalid form data');
  }

  const meal: MealInput = {
    title,
    summary,
    instructions,
    creator,
    creator_email,
    image,
  };

  await saveMeal(meal);
  redirect('/');
}

function getFormValue(formData: FormData, key: string): string | undefined {
  const value = formData.get(key);
  return typeof value === 'string' ? value : undefined;
}
