'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

export async function sharedMeal(formData: FormData) {
  const meal = {
    title: getFormValue(formData, 'title'),
    summary: getFormValue(formData, 'summary'),
    instructions: getFormValue(formData, 'instructions'),
    creator: getFormValue(formData, 'name'),
    creator_email: getFormValue(formData, 'email'),
    image: formData.get('image'),
  };

  await saveMeal(meal);
  redirect('/');
}

function getFormValue(formData: FormData, key: string): string | undefined {
  const value = formData.get(key);
  return typeof value === 'string' ? value : undefined;
}
