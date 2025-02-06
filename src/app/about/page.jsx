import React from "react";

import styles from "./styles.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <h1>О нас</h1>
      <div className={styles.flex}>
        <img
          src="my-shop/src/assets/tubi.jpg"
          alt=""
        />
        <div className={styles.text}>
          <h2><center>Добро пожаловать на наш сайт.</center></h2>
          <p>
            Впусти в свою жизнь краски! У нас можно не только приобрести
            художественные товары,но и получить качественные рекомендации по их
            использованию. 
            <strong></strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
