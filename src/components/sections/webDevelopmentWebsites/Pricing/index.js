import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import { Desktop, Star, Tick } from "@/components/atoms/Icons";
import styles from './styles.module.scss';

const Pricing = ({
  data: {
    pricing_Heading,
    pricing_Plans 
  }
}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{pricing_Heading}</DecorativeHeading>
      <div className={styles.wrapper}>
        {pricing_Plans.map((plan, i) => (
          <div className={`${styles.item} ${plan.mostPopular ? styles.mostPopular : ''}`} key={i}>
            <div className={styles.content}>
              {plan.mostPopular && (
                <div className={styles.badge}>
                  <Star />
                  <span>Najczęściej wybierane</span>
                </div>
              )}
              <div className={styles.info}>
                <h3 className={styles.title}>{plan.title}</h3>
                <p className={styles.description}>{plan.description}</p>
                <p className={styles.subpages}>
                  <Desktop />
                  <span>{plan.subpages}</span>
                </p>
              </div>
              <p className={styles.price}>{plan.price}</p>
              <Button data={plan.cta}className={styles.cta}/>
              <div className={styles.benefits}>
                <p>Korzyści:</p>
                <ul>
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className={`${benefit.highlighted && styles.highlighted}`}>
                      <Tick />
                      <span>{benefit.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {i === 0 && (
                <p className={styles.hint}>{plan.hint}</p>
              )}
            </div>
            <p className={styles.hint}>{plan.hint}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Pricing;