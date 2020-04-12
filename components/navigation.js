import Link from 'next/link';

import styles from "./navigation.module.css";

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a className={styles.link}>Homepage</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}

export default Navigation