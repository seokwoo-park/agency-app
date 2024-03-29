import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  description: string;
  image?: string;
};

const SEO = ({ title, description, image }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      {image && <meta itemProp="image" content={image} />}
    </Head>
  );
};

export default SEO;
