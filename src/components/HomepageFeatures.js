import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Overview",
    Svg: require("@site/static/img/overview.svg").default,
    description: (
      <>
        There are several plugins available at the ZuriChat market place. These
        plugins can easily be installed and configured to suite your workspace
        needs.
      </>
    ),
    url: "/intro",
  },
  {
    title: "Plugins",
    Svg: require("@site/static/img/plugin.svg").default,
    description: (
      <>
        There are several plugins available at the ZuriChat market place. These
        plugins can easily be installed and configured to suite your workspace
        needs.
      </>
    ),
    url: "/plugins",
  },
  {
    title: "Authorizations",
    Svg: require("@site/static/img/authorization.svg").default,
    description: <>This document will show you how to authorize API calls.</>,
    url: "/docs/authorization",
  },
  {
    title: "Core APIs",
    Svg: require("@site/static/img/api.svg").default,
    description: (
      <>
        The Authentication API enables you to manage and access Zuri core
        resources. It offers endpoints so users can log in, log out, access
        APIs, and more.
      </>
    ),
    url: "/category/core-api",
  },
  {
    title: "Development",
    Svg: require("@site/static/img/development.svg").default,
    description: (
      <>
        There are several plugins available at the ZuriChat market place. These
        plugins can easily be installed and configured to suite your workspace
        needs.
      </>
    ),
    url: "/category/development",
  },
  {
    title: "Guidelines",
    Svg: require("@site/static/img/guidelines.svg").default,
    description: (
      <>
        There are several plugins available at the ZuriChat market place. These
        plugins can easily be installed and configured to suite your workspace
        needs.
      </>
    ),
    url: "/category/guidelines",
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <Link className={styles.card__container} to={url}>
      <div className={styles.svg__container}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={styles.text__container}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

function Enquiries() {
  return (
    <div className={styles.enquiries__container}>
      <p>
        For more enquiries, please reach out to us @ E-mail: developer@zuri.chat
      </p>
      <svg
        width="40"
        height="39"
        viewBox="0 0 40 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9937 0C8.95292 0 0 8.95127 0 19.9937C0 28.8274 5.7288 36.3219 13.6729 38.9656C14.6721 39.1507 15.039 38.5319 15.039 38.0038C15.039 37.5271 15.0204 35.9521 15.0118 34.2814C9.44956 35.4909 8.27585 31.9224 8.27585 31.9224C7.36636 29.6114 6.05591 28.9969 6.05591 28.9969C4.24189 27.756 6.19265 27.7815 6.19265 27.7815C8.20036 27.9226 9.25753 29.8419 9.25753 29.8419C11.0408 32.8985 13.9348 32.0148 15.0757 31.5039C15.2552 30.2117 15.7733 29.3297 16.3451 28.8304C11.9042 28.3248 7.23591 26.6105 7.23591 18.9494C7.23591 16.7666 8.01694 14.983 9.29593 13.5828C9.08834 13.0793 8.40398 11.0457 9.48962 8.29174C9.48962 8.29174 11.1686 7.75439 14.9893 10.3412C16.5842 9.89818 18.2945 9.67602 19.9937 9.6684C21.6928 9.67602 23.4045 9.89818 25.0024 10.3412C28.8185 7.75439 30.4951 8.29174 30.4951 8.29174C31.5834 11.0457 30.8987 13.0793 30.6911 13.5828C31.9731 14.983 32.7488 16.7666 32.7488 18.9494C32.7488 26.6287 28.0715 28.3195 23.6194 28.8145C24.3366 29.435 24.9756 30.6517 24.9756 32.5171C24.9756 35.1922 24.9524 37.3453 24.9524 38.0038C24.9524 38.5359 25.3123 39.1593 26.3257 38.963C34.2655 36.3163 39.987 28.8244 39.987 19.9937C39.987 8.95127 31.0354 0 19.9937 0ZM7.48829 28.4814C7.44425 28.5808 7.28798 28.6106 7.14561 28.5423C7.00059 28.4771 6.91915 28.3417 6.96616 28.2421C7.0092 28.1397 7.16581 28.1113 7.31049 28.1798C7.45584 28.245 7.53861 28.3818 7.48829 28.4814ZM8.47175 29.359C8.3764 29.4474 8.19 29.4063 8.06352 29.2666C7.93274 29.1272 7.90824 28.9408 8.00492 28.8511C8.10325 28.7627 8.28403 28.8041 8.41514 28.9434C8.54592 29.0845 8.57141 29.2696 8.47175 29.359ZM9.14645 30.4817C9.02395 30.5668 8.82364 30.487 8.69981 30.3092C8.57731 30.1314 8.57731 29.9182 8.70246 29.8328C8.82662 29.7474 9.02395 29.8242 9.14943 30.0007C9.2716 30.1814 9.2716 30.3947 9.14645 30.4817ZM10.2875 31.7821C10.1779 31.9029 9.9445 31.8705 9.77366 31.7056C9.59884 31.5444 9.55017 31.3156 9.66009 31.1947C9.77101 31.0735 10.0057 31.1076 10.1779 31.2712C10.3514 31.4321 10.4044 31.6625 10.2875 31.7821ZM11.7622 32.221C11.7139 32.3777 11.4891 32.4488 11.2626 32.3823C11.0365 32.3138 10.8885 32.1303 10.9342 31.9721C10.9812 31.8145 11.207 31.7403 11.4351 31.8115C11.6609 31.8797 11.8092 32.0618 11.7622 32.221ZM13.4405 32.4073C13.4461 32.5721 13.2541 32.7089 13.0164 32.7119C12.7773 32.7172 12.584 32.5837 12.5813 32.4215C12.5813 32.255 12.769 32.1195 13.0081 32.1156C13.2458 32.1109 13.4405 32.2434 13.4405 32.4073ZM15.0892 32.3441C15.1177 32.505 14.9525 32.6702 14.7164 32.7142C14.4843 32.7566 14.2694 32.6573 14.24 32.4977C14.2112 32.3328 14.3793 32.1676 14.6111 32.1249C14.8475 32.0838 15.0591 32.1805 15.0892 32.3441Z"
          fill="#161614"
        />
      </svg>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="container margin">
      <div className={styles.box__container}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>

      <>
        <Enquiries />
      </>
    </section>
  );
}
