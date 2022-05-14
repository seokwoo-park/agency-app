import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { SEO } from "../../components";
import { services_data } from "../../constants/data/services";
import ServicesType from "../../constants/types/ServicesType";
import styles from "../../styles/Products.module.css";

type Props = {
  product: ServicesType;
};

interface Params extends ParsedUrlQuery {
  name: string;
}

export const getStaticPaths: GetStaticPaths = () => {
  const products: ServicesType[] = services_data;
  const paths: { params: { name: string } }[] = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const param = params as Params;

  const product = services_data.filter((item) => item.name === param.name)[0];

  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }: Props) => {
  console.log(product);
  return (
    <div className={styles.container}>
      <SEO
        title="Digital Design for Your Product"
        description="Web Design, App Development, Content Creation Agency Near NY"
      />
      <div className={styles.cardL}>
        {product.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image
              src={img.url}
              layout="fill"
              objectFit="cover"
              alt={product.desc}
            />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export default Product;
