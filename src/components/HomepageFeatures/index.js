import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from "@theme/CodeBlock"

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

const codeSnippetsList = [
    {
        title: "Functionals",
        description: (<h2>"desc"</h2>),
        codeBlock: ('Print("Hello, world !")')
    }
]
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Paragraph({title, description, codeBlock}){
    return (
        <div className="row text--center">
            <div className="col">
                <div className="text--center padding-horizontal-md">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="text--left ">
                        <CodeBlock language="tsx">{codeBlock}</CodeBlock>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
            {
                codeSnippetsList.map((props, idx) => {
                    return (
                        <Paragraph key={idx} {...props}>
                        </Paragraph>
                    )
                })
            }
          <Paragraph title="tutorial" description="this is a test" codeBlock={('type Tutorial = { title:string, description:string }')} ></Paragraph>
        </div>
      </div>
    </section>
  );
}
