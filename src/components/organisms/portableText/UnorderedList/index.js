import styles from './styles.module.scss';

const UnorderedList = ({ data }) => {
  return (
    <ul className={styles.unorderedList}>
      {data.map((item, i) => (
        <li key={i}>
          <div>
            {item.icon}
            <p className={styles.title}>{item.title}</p>
          </div>
          <p className={styles.description}>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
export default UnorderedList