import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import Img from '@/components/atoms/Img';

const PeopleShowcase = ({ heading, list }) => {
  return (
    <section className={styles.PeopleShowcase}>
      <header>
        <DecorativeHeading type='h2'>{heading}</DecorativeHeading>
      </header>
      <div className={styles.list}>
        {list.map(({ img, name, cryptonym, description }, i) => (
          <div
            key={i}
            className={styles.item}
          >
            <div className={styles.info}>
              <Img
                data={img}
                className='personBorder'
                sizes='64px'
                width={64}
                height={64}
              />
              <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.cryptonym}>{cryptonym}</p>
              </div>
            </div>
            <Markdown className={styles.description}>{description}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PeopleShowcase;