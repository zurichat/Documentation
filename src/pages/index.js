import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroHeader}>
      <svg
        className={styles.bottom__left}
        width="217"
        height="255"
        viewBox="0 0 217 255"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.892 206.497C36.8925 195.812 40.3508 185.414 46.7499 176.856C53.149 168.299 62.1454 162.042 72.3947 159.02C82.6441 155.999 93.5959 156.375 103.614 160.092C113.632 163.81 122.178 170.67 127.974 179.646C133.771 188.622 136.508 199.233 135.775 209.894C135.043 220.554 130.88 230.691 123.91 238.79C116.94 246.889 171.307 222.188 160.875 224.5C150.443 226.812 113.353 243.185 103.614 238.79C124.508 225.961 59.4636 248.444 47.5976 252.451C46.1965 252.91 44.4888 253.392 42.5841 253.983C41.9279 254.19 41.2324 254.238 40.5538 254.126C39.8752 254.013 39.2326 253.742 38.6783 253.335C38.1239 252.928 37.6733 252.396 37.3629 251.782C37.0526 251.168 36.8912 250.489 36.892 249.802V206.497Z"
          fill="white"
        />
        <rect
          x="1.5"
          y="1.5"
          width="181"
          height="344"
          rx="42.5"
          transform="matrix(4.37114e-08 1 1 -4.37114e-08 -194 -6.55671e-08)"
          fill="#FEA162"
          stroke="white"
          stroke-width="3"
        />
        <rect
          width="146"
          height="181"
          rx="44"
          transform="matrix(4.37114e-08 1 1 -4.37114e-08 36 96)"
          fill="white"
        />
      </svg>

      {/* <svg
        className={styles.top__right}
        width="226"
        height="109"
        viewBox="0 0 226 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M220.31 72.1801C220.31 89.4036 206.358 103.36 189.155 103.36C171.952 103.36 158 89.4036 158 72.1801C158 54.9565 171.952 41 189.155 41C206.358 41 220.31 54.9565 220.31 72.1801Z"
          stroke="#FEA162"
          stroke-width="10"
        />
        <circle
          cx="112.5"
          cy="-24.5"
          r="111"
          stroke="#1A61DB"
          stroke-width="3"
        />
      </svg> */}

      <svg
        className={styles.bottom__right}
        width="217"
        height="189"
        viewBox="0 0 217 189"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M111.922 160.504C111.923 177.45 117.408 193.94 127.556 207.511C137.704 221.082 151.971 231.004 168.225 235.796C184.479 240.588 201.847 239.991 217.734 234.096C233.621 228.2 247.173 217.322 256.366 203.087C265.559 188.852 269.899 172.024 268.738 155.118C267.576 138.213 260.975 122.137 249.921 109.293C238.867 96.4492 223.954 87.5271 207.41 83.8601C190.866 80.1931 173.579 81.978 158.134 88.9481C152.44 91.5173 147.718 93.9824 128.865 87.6288C126.678 86.8997 123.97 86.1358 120.949 85.1984C119.909 84.8712 118.806 84.7937 117.729 84.9723C116.653 85.1508 115.634 85.5805 114.755 86.2263C113.876 86.8721 113.161 87.716 112.669 88.6896C112.177 89.6631 111.921 90.7389 111.922 91.8298V160.504Z"
          fill="#DC1AA3"
        />
        <path
          d="M99 60.4973C98.9994 49.8119 95.5412 39.4136 89.1421 30.8562C82.7429 22.2987 73.7465 16.0418 63.4972 13.0202C53.2479 9.9987 42.296 10.3749 32.2782 14.0925C22.2603 17.8101 13.7144 24.6696 7.91751 33.6459C2.1206 42.6222 -0.616058 53.2333 0.116501 63.8936C0.849061 74.5538 5.0115 84.6909 11.9818 92.7898C18.9521 100.889 28.356 106.515 38.7882 108.827C49.2204 111.139 60.1208 110.014 69.8605 105.619C73.429 103.999 76.4284 102.444 88.2943 106.451C89.6955 106.91 91.4031 107.392 93.3078 107.983C93.964 108.19 94.6596 108.238 95.3382 108.126C96.0168 108.013 96.6593 107.742 97.2137 107.335C97.7681 106.928 98.2187 106.396 98.529 105.782C98.8394 105.168 99.0007 104.489 99 103.802V60.4973Z"
          fill="white"
        />
        <path
          d="M148.102 72.3601C168.084 72.3601 184.282 56.1617 184.282 36.1801C184.282 16.1984 168.084 0 148.102 0C128.121 0 111.922 16.1984 111.922 36.1801C111.922 56.1617 128.121 72.3601 148.102 72.3601Z"
          fill="#1A61DB"
        />
      </svg>

      <div className={styles.container}>
        <div className={styles.container__box}>
          <h1 className={styles.hero__title}>Getting started?</h1>
          <form className={styles.search__form}>
            <input className={styles.input} />
            <button className={styles.search__btn}>Search</button>
          </form>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
