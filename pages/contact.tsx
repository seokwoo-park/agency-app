import React from "react";
import Circle from "../components/Common/Circle/Circle";
import style from "../styles/Contact.module.css";

const contact = () => {
  return (
    <div className={style.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh" />
      <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" />
      <h1 className={style.title}>Get in Touch</h1>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="Name" />
        <input className={style.inputS} type="text" placeholder="Phone" />
        <input className={style.inputL} type="email" placeholder="Email" />
        <input className={style.inputL} type="text" placeholder="Subject" />
        <textarea className={style.textArea} rows={6} placeholder="Message" />
        <button className={style.button} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default contact;
