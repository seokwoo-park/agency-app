import Image from "next/image";
import React from "react";
import UserDataType from "../../constants/types/UserDataType";
import styles from "../../styles/Testimonial.module.css";
import Circle from "../Common/Circle/Circle";

type Props = {
  userData: UserDataType[];
};

const Testimonial = ({ userData }: Props) => {
  console.log(userData);
  return (
    <div className={styles.container}>
      <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {userData.map((user) => (
          <div className={styles.card} key={user.login.uuid}>
            <p className={styles.comment}>
              &ldquo;lorem ipsum dolor sit amet consectetur adipiscing
              elit&rdquo;
            </p>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                src={user.picture.medium}
                width="45"
                height="45"
                objectFit="cover"
                alt="user profile"
              />
              <div className={styles.info}>
                <span className={styles.username}>
                  {user.name.first} {user.name.last}
                </span>
                <span className={styles.jobTitle}>{user.location.country}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
