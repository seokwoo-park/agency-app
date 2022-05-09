import type { NextPage } from "next";
import SEO from "../components/SEO/SEO";
import styles from "../styles/Home.module.css";
import { Intro, Services } from "../components";
import { services_data } from "../constants/data/services";
import ServicesType from "../constants/types/ServicesType";
import Testimonial from "../components/Testimonial/Testimonial";
import UserDataType from "../constants/types/UserDataType";

interface Props {
  services: ServicesType[];
  userData: UserDataType[];
}

export const getServerSideProps = async () => {
  const services = services_data;
  const res = await fetch("https://randomuser.me/api/?results=6");
  const { results: userData } = await res.json();
  return {
    props: { userData, services },
  };
};

const Home: NextPage<Props> = ({ services, userData }) => {
  return (
    <div className={styles.container}>
      <SEO title="GRAPEST" description="GRAPEST home" />
      <Intro />
      <Services services={services} />
      <Testimonial userData={userData} />
    </div>
  );
};

export default Home;
