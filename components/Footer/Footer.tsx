import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Footer.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>GRAPEST CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            <a className={styles.link}>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image
                src={"/assets/link.png"}
                width="40px"
                height="40px"
                alt=""
              />
            </a>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Wrocław / POLAND
          <br />
          Seoul / KOREA
        </div>
        <div className={styles.cardItem}>
          dev.seokwoopark@gmail.com
          <br /> +48 795-521-197 (PL)
          <br /> +82 10-5676-9455 (KOR)
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br />
          <a
            href="https://www.linkedin.com/in/seokwoo-park/"
            target="_blank"
            rel="noreferrer"
          >
            <u className={styles.followLink}>Linked In</u>
          </a>
          <br />
          <a href="https://bit.ly/3JDYq0Y" target="_blank" rel="noreferrer">
            <u className={styles.followLink}>Notion Portfolio</u>
          </a>
        </div>
        <div className={styles.cardItem}>
          © 2022 SEOKWOO PARK,
          <br />
          Project website
        </div>
      </div>
    </div>
  );
};

export default Footer;
