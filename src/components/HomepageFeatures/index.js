import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Secure Note Taking',
    Svg: require('@site/static/img/encrypted.png').default,
    description: (
      <>Your notes are safely secured with aes-256-bit encryption 🔒</>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/cloud-storage.png').default,
    description: (
      <>
        With DoNotes, your notes are constantly being backed up on the web so
        you can access them wherever you are! ☁
      </>
    ),
  },
  {
    title: 'Block-based editing',
    Svg: require('@site/static/img/construction.png').default,
    description: (
      <>
        DoNotes incorporates block-based editing so you can easily build and
        re-order your notes! 🧱
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
