import Image from 'next/image';
import styles from './page.module.css';
import { getMeal } from '../../lib/meals';
import { notFound } from 'next/navigation';

type MealsDetailProps = {
  params: { slug: string };
};

export default async ({ params }: MealsDetailProps) => {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, '<br />'),
          }}
        ></p>
      </main>
    </>
  );
};
