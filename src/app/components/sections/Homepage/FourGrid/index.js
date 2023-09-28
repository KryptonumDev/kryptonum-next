import React from "react";
import ReactMarkdown from 'react-markdown';
import Button from "@/app/components/atoms/Button";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from './styles.module.scss';


const FourGrid = ({ heading, claim, paragraph, secondClaim, cta }) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ReactMarkdown>{claim}</ReactMarkdown>
      <p>{paragraph}</p>
      <div>
        <ReactMarkdown>{secondClaim}</ReactMarkdown>
        <Button theme={cta.theme} to={cta.href} className={styles.cta}>{cta.text}</Button>
      </div>
    </section>
  );
}
 
export default FourGrid;