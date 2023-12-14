import { Cursor } from "@/atoms/Icons";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/markdown";
import Faq4Grid from "@/organisms/faq/Faq4Grid";
import FaqPayment from "@/organisms/faq/FaqPayment";
import FaqContact from "@/organisms/forms/FaqContact";
import fetchData from "@/utils/fetchData";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import FaqCopy from "../../organisms/faq/FaqCopy";
import FaqInfo from "../../organisms/faq/FaqInfo";
import FaqTime from "../../organisms/faq/FaqTime";
import FaqWhy from "../../organisms/faq/FaqWhy";
import FaqWordpress from "../../organisms/faq/FaqWordpress";
import styles from "./styles.module.scss";

const Faq = async ({ heading }) => {
	const {
		global: { faq },
	} = await query();
	const { price, payment, time, info, why, cooperation, logo, seo, copy, wordpress } = faq;

	const faqs = [
		{
			question: price.question,
			answer: (
				<Faq4Grid
					data={{
						heading: price.heading,
						paragraph: price.paragraph,
						secondParagraph: price.secondParagraph,
						subheading: price.subheading,
						cta: price.cta,
						additionalStyles: styles.answer,
					}}
				/>
			),
		},
		{
			question: payment.question,
			answer: (
				<FaqPayment
					data={{
						heading: payment.heading,
						paragraph: payment.paragraph,
						secondParagraph: payment.secondParagraph,
						thirdParagraph: payment.thirdParagraph,
						text: payment.text,
						list: payment.list,
						additionalStyles: styles.answer,
					}}
				/>
			),
		},
		{
			question: time.question,
			answer: (
				<FaqTime
					data={{
						img: time.img,
						heading: time.heading,
						paragraph: time.paragraph,
						cta: time.cta,
						listHeading: time.listHeading,
						list: time.list,
						additionalStyles: styles.answer,
					}}
				/>
			),
		},
		{
			question: info.question,
			answer: (
				<FaqInfo
					data={{
						paragraph: info.paragraph,
						firstHeading: info.firstHeading,
						firstList: info.firstList,
						secondHeading: info.secondHeading,
						secondList: info.secondList,
						thirdHeading: info.thirdHeading,
						thirdList: info.thirdList,
						summary: info.summary,
						additionalStyles: styles.answer,
					}}
				/>
			),
		},
		{
			question: why.question,
			answer: (
				<FaqWhy
					data={{
						heading: why.heading,
						paragraph: why.paragraph,
						list: why.list,
						summary: why.summary,
						additionalStyles: styles.answer,
					}}
				/>
			),
		},
		{
			question: cooperation.question,
			answer: (
				<Faq4Grid
					data={{
						heading: cooperation.heading,
						paragraph: cooperation.paragraph,
						secondParagraph: cooperation.secondParagraph,
						subheading: cooperation.subheading,
						cta: cooperation.cta,
						additionalStyles: styles.answer,
					}}
				/>
			),
		},
		{
			question: logo.question,
			answer: (
				<Faq4Grid
					data={{
						heading: logo.heading,
						paragraph: logo.paragraph,
						secondParagraph: logo.secondParagraph,
						subheading: logo.subheading,
						cta: logo.cta,
						additionalStyles: styles.answer,
					}}
				/>
			),
		},
		{
			question: seo.question,
			answer: (
				<Faq4Grid
					data={{
						heading: seo.heading,
						paragraph: seo.paragraph,
						secondParagraph: seo.secondParagraph,
						subheading: seo.subheading,
						additionalStyles: styles.answer,
					}}
				/>
			),
		},
		{
			question: copy.question,
			answer: (
				<FaqCopy
					data={{
						img: copy.img,
						heading: copy.heading,
						paragraph: copy.paragraph,
						summary: copy.summary,
						additionalStyles: styles.answer,
					}}
				/>
			),
		},
		{
			question: wordpress.question,
			answer: (
				<FaqWordpress
					data={{
						heading: wordpress.heading,
						paragraph: wordpress.paragraph,
						subheading: wordpress.subheading,
						secondParagraph: wordpress.secondParagraph,
						cta: wordpress.cta,
						summary: wordpress.summary,
						summaryCta: wordpress.summaryCta,
						additionalStyles: styles.answer,
					}}
				/>
			),
		},
	];
	return (
		<section className={styles.section}>
			<header>
				<DecorativeHeading type="h2">{heading || faq.heading}</DecorativeHeading>
				<p className={styles.hint}>
					<Cursor />
					<span>{faq.hint}</span>
				</p>
			</header>
			<div className={styles.wrapper}>
				{faqs.map((faq, i) => (
					<details key={i}>
						<summary>
							<div>
								<span className={styles.counter}>{`/0${i+1}`}</span>
								<span>{faq.question}</span>
							</div>
							<div className={styles.plusIcon}>
								<span></span>
								<span></span>
							</div>
						</summary>
						{faq.answer}
					</details>
				))}
			</div>
			<div className={styles.faqForm}>
				<div className={`${styles.maxWidth} maxWidth`}>
					<div className={styles.copy}>
						<Markdown
							className={styles.heading}
							components={{ p: "h3" }}
						>
							{faq.form.heading}
						</Markdown>
						<Markdown className={styles.subheading}>{faq.form.subheading}</Markdown>
					</div>
					<FaqContact />
					<div className={styles.person}>
						<Markdown className={styles.paragraph}>{faq.form.paragraph}</Markdown>
						<Img
							data={faq.form.person.img}
							height={96}
							width={96}
							sizes="96px"
							className={`personBorder ${styles.img}`}
						/>
						<a href={`tel:${faq.form.person.tel.replace(/\s/g, "")}`}>{faq.form.person.tel}</a>
					</div>
				</div>
			</div>
		</section>
	);
};

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
	query {
  global: Global(id: "global") {
    faq {
      heading
      hint
      price {
        question
        heading
        paragraph
        secondParagraph
        subheading
        cta {
          theme
          text
          href
        }
      }
      payment {
        question
        heading
        paragraph
        secondParagraph
        thirdParagraph
        text
        list
      }
      time {
        question
        img {
          asset {
            altText
            url
            metadata {
              lqip
              dimensions {
                height
                width
              }
            }
          }
        }
        heading
        paragraph
        cta {
          theme
          href
          text
        }
        listHeading
        list
      }
      info {
        question
        paragraph
        firstHeading
        firstList
        secondHeading
        secondList
        thirdHeading
        thirdList
        summary
      }
      why {
        question
        heading
        paragraph
        list
        summary
      }
      cooperation {
        question
        heading
        paragraph
        secondParagraph
        subheading
        cta {
          theme
          text
          href
        }
      }
      logo {
        question
        heading
        paragraph
        secondParagraph
        subheading
        cta {
          theme
          text
          href
        }
      }
      seo {
        question
        heading
        paragraph
        secondParagraph
        subheading
      }
      copy {
        question
        img {
          asset {
            altText
            url
            metadata {
              lqip
              dimensions {
                height
                width
              }
            }
          }
        }
        heading
        paragraph
        summary
      }
      wordpress {
        question
        heading
        paragraph
        subheading
        secondParagraph
        cta {
          theme
          href
          text
        }
        summary
        summaryCta {
          theme
          href
          text
        }
      }
      form {
        heading
        subheading
        paragraph
        person {
          img {
            asset {
              altText
              url
              metadata {
                lqip
                dimensions {
                  height
                  width
                }
              }
            }
          }
          tel
        }
      }
    }
  }
}
  `);
	return data;
};
export default Faq;
