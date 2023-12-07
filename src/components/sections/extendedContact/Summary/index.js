import LatestBlogEntries from '../../LatestBlogEntries';
import styles from './styles.module.scss';

const Summary = ({ name, endTime, blogEntries }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textPart}>
        <h2>
          Formularz został <strong>wysłany</strong>! Spodziewaj się od nas maila
        </h2>
        <p>
          {name}, było super! Powtórzymy to kiedyś?
        </p>
        <p>
          A w ogóle to dobra robota! Całość zajęła Ci {endTime}! Przybij pionę!
        </p>
      </div>
      <LatestBlogEntries heading={'Chcesz zobaczyć, co u nas?'} data={blogEntries}/>
    </section>
  )
}
export default Summary;