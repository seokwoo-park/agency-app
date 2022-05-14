import Image from "next/image";
import React from "react";
import styles from "../../styles/Intro.module.css";
import Circle from "../Common/Circle/Circle";

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <p className={styles.brandName}>WE ARE GRAPEST </p>
          DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/assets/grapest.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="contain"
          alt="Digital product agency grapest"
        />
      </div>
    </div>
  );
};

export default Intro;
