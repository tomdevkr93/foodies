'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.png';
import styles from './MainHeader.module.css';
import MainHeaderBackground from './MainHeaderBackground';
import { usePathname } from 'next/navigation';

export default function MainHeader() {
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                className={path.startsWith('/meals') ? styles.active : ''}
                href="/meals"
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                className={path.startsWith('/community') ? styles.active : ''}
                href="/community"
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
