import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';

const Sources = ({ data: { heading, list }}) => {
  const showRootDomain = list.map(item => {
    const domain = new URL(item.href).hostname.replace('www.', '');
    return {
      href: domain
    };
  });
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <div className={styles.wrapper}>
        {list.map((item, i) => (
          <a href={item.href} target="_blank" rel="noreferrer" key={i}>
            <p>{item.text}</p>
            <span>{showRootDomain[i].href}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
export default Sources;