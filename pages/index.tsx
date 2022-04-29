import type { NextPage } from "next";
import SEO from "../components/SEO/SEO";
import styles from "../styles/Home.module.css";
import { Intro } from "../components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SEO title="PEACH" description="PEACH home" />
      <Intro />
    </div>
  );
};

export default Home;
