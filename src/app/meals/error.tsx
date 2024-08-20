'use client';

type Props = {
  error: Error;
};

export default function Error({ error }: Props) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
}
