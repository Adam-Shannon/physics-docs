import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from "@theme/CodeBlock"

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Designed with user experience in mind to avoid those 90's sites covered in adds and subscription requests.
      </>
    ),
  },
  {
    title: 'Undergrad Notes',
    description: (
      <>
        Undergrad level physics notes with animations and code. If you'd like to contribute create
          a github issue and look in the <code>docs</code> directory for examples.
      </>
    ),
  },
  {
    title: 'Powered by React',
    description: (
      <>
          Customisable and modern, contributing is as easy as adding a markdown file.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
          <div className="row">
          {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props}></Feature>
          ) )}
          </div>
      </div>
    </section>
  );
}
