import React from "react";
import type { FC } from "react";
import Link from "next/link";

import styles from "./Header.module.scss";

const Header: FC = () => (
  <header className={styles.header}>
    <div className={styles.header__container}>
      <h2 className={styles.header__container__title}>
        <Link href="/" passHref>
          <a href="replace" className={styles.header__container__title__link}>
            NextJS Starter Essentials
          </a>
        </Link>
      </h2>
    </div>
  </header>
);

export default Header;
