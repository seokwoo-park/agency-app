import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.container}>
      <Link href="/">PEACH</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
