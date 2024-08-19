import Link from 'next/link';
import logo from '@/public/images/logo.png';
import styles from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <img src={logo.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
