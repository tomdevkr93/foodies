import Meal, { dummyMeals } from '@/src/model/Meal';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return dummyMeals;
}

export async function getMeal(slug: string): Promise<Meal | null> {
  const resultMeal = dummyMeals.find((meal) => meal.slug == slug);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return resultMeal ?? null;
}

export async function saveMeal(meal: any) {
  meal.slug = slugify(meal.title, { lower: true, strict: false });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });

  meal.image = `/images/${fileName}`;
  dummyMeals.push(meal);
}
