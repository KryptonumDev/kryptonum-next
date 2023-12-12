'use server'

import Img from "@/utils/Img";
import { portableTextToMarkdown, slugify } from "@/utils/functions";
import { PortableText, toPlainText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Star } from "../../atoms/Icons";
import SimpleGridImage2Columns from "../../molecules/portableText/SimpleGridImage2Columns";
import SimpleGridList2Columns from "../../molecules/portableText/SimpleGridList2Columns";
import TabSection from "../../molecules/portableText/TabSection";
import Tiles from "../../sections/portableText/Tiles";
import DetailedGrid from "../portableText/DetailedGrid";
import OrderedList from "../portableText/OrderedList";
import UnorderedList from "../portableText/UnorderedList";
import styles from './styles.module.scss';
import QuickForm from "@/components/sections/QuickForm";


export const ImageRenderer = ({ value: { asset: { _ref }, altText }, sizes }) => {
  const builder = imageUrlBuilder({
    projectId: "8mfl0q49",
    dataset: "production",
    apiVersion: '2023-11-21',
  });
  return (
    <Img
      src={builder.image(_ref).url()}
      width={getImageDimensions(_ref).width}
      height={getImageDimensions(_ref).height}
      alt={altText || ''}
      className={styles.img}
      {...sizes && ({ sizes })}
    />
  )
}

const components = {
  types: {
    image: (data) => (
      <ImageRenderer
        {...data}
        sizes="(max-width: 1099px) 66vw, 100vw"
      />
    ),
    quickForm: ({ value: { heading, subheading, cta} }) => <QuickForm data={{heading,subheading, cta}} isPortableContent={true} />,
    orderedList: ({ value: { array, paragraph }}) => <OrderedList paragraph={paragraph} array={array} />,
    unorderedList: ({ value: { array }}) => {
      const newArray = array.map(obj => {
        return { ...obj, icon: <ImageRenderer value={obj.icon} /> };
      });
      return <UnorderedList data={newArray} />
    },
    blog_Tiles: ({ value: { array } }) => <Tiles data={array} />,
    SimpleGridList2Columns: ({ value: { list } }) => <SimpleGridList2Columns list={list} />,
    SimpleGridImage2Columns: ({ value: { list } }) => <SimpleGridImage2Columns list={list} />,
    TabSection: ({ value: { blocks } }) => <TabSection blocks={blocks} />,
    DetailedGrid: ({ value: { blocks } }) => <DetailedGrid blocks={blocks} />,
  },
  block: {
    h2: ({ value }) => <DecorativeHeading type="h2" id={slugify(toPlainText(value))}>{portableTextToMarkdown(value)}</DecorativeHeading>,
    h3: ({ value }) => <DecorativeHeading type="h3" id={slugify(toPlainText(value))}>{portableTextToMarkdown(value)}</DecorativeHeading>,
    largeParagraph: ({ children }) => <p className={styles.largeParagraph}>{children}</p>,
  },
  listItem : {
    bullet: ({ children }) => <li><Star /><span>{children}</span></li>,
    number: ({ children }) => <ol className={styles.portableList}>{children}</ol>
  },
  list: {
    bullet: ({ children }) => <ul className={styles.portableList}>{children}</ul>,
    number: ({ children }) => <ol className={styles.portableList}>{children}</ol>,
  },
  marks: {
    link: ({value, children}) => {
      const { href } = value
      return <a href={href} target="_blank" rel="noreferrer">{children}</a>
    }
  }
}

const PortableContent = ({ data }) => {
  return (
    <section className={styles.section}>
      <PortableText
        value={data}
        components={components}
      />
    </section>
  );
}
export default PortableContent