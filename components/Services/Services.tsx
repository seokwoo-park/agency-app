import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Services.module.css";
import ServicesType from "../../types/ServicesType";

type Props = {
  services: ServicesType[];
};

const Services = ({ services }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What We Can Do?</h1>
      <h1 className={styles.subtitle}>Services we can help you with</h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link passHref key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              {/* <div className={styles.desc}>{service.desc}</div> */}
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    className={styles.video}
                    src={`/assets/${service.video}`}
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <Image
                    src={`/assets/${service.photo}`}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt={service.title}
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
