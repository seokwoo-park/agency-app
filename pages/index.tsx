import type { GetStaticProps, NextPage } from "next";
import SEO from "../components/SEO/SEO";
import styles from "../styles/Home.module.css";
import { Intro, Services } from "../components";
import { services_data } from "../constants/services";
import ServicesType from "../types/ServicesType";

interface Props {
  services: ServicesType[];
}

export const getStaticProps: GetStaticProps = () => {
  const services = services_data;
  return {
    props: { services },
  };
};

const Home: NextPage<Props> = ({ services }) => {
  return (
    <div className={styles.container}>
      <SEO title="PEACH" description="PEACH home" />
      <Intro />
      <Services services={services} />
    </div>
  );
};

export default Home;
