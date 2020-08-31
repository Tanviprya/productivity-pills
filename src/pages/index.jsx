import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Complete what you start",
    imageUrl: "img/undraw_project_completed.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam.{" "}
      </>
    ),
  },
  {
    title: "Unlock the keys to productivity",
    imageUrl: "img/undraw_road_to_knowledge.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam.{" "}
      </>
    ),
  },
  {
    title: "Win in Life",
    imageUrl: "img/undraw_winners.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam.{" "}
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {" "}
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />{" "}
        </div>
      )}{" "}
      <h3> {title} </h3> <p> {description} </p>{" "}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title"> {siteConfig.title} </h1>{" "}
          <p className="hero__subtitle"> {siteConfig.tagline} </p>{" "}
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("book/")}
            >
              Start Reading{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      <main>
        {" "}
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {" "}
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </section>
        )}{" "}
      </main>{" "}
    </Layout>
  );
}

export default Home;
