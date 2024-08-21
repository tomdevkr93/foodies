import Link from 'next/link';
import styles from './page.module.css';
import MealsGrid from '@/src/components/meals/MealsGrid';
import { getMeals } from '../lib/meals';
import { Suspense } from 'react';
import { Metadata } from 'next';

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

function LoadingIndicator() {
  return <p className={styles.loading}>Fetching meals...</p>;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<LoadingIndicator />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
