'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/public/images/burger.jpg';
import curryImg from '@/public/images/curry.jpg';
import dumplingsImg from '@/public/images/dumplings.jpg';
import macncheeseImg from '@/public/images/macncheese.jpg';
import pizzaImg from '@/public/images/pizza.jpg';
import schnitzelImg from '@/public/images/schnitzel.jpg';
import tomatoSaladImg from '@/public/images/tomato-salad.jpg';
import styles from './ImageSlideShow.module.css';

const images = [
  { staticImageData: burgerImg, alt: 'A delicious, juicy burger' },
  { staticImageData: curryImg, alt: 'A delicious, spicy curry' },
  { staticImageData: dumplingsImg, alt: 'Steamed dumplings' },
  { staticImageData: macncheeseImg, alt: 'Mac and cheese' },
  { staticImageData: pizzaImg, alt: 'A delicious pizza' },
  { staticImageData: schnitzelImg, alt: 'A delicious schnitzel' },
  { staticImageData: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.staticImageData}
          className={index === currentImageIndex ? styles.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
