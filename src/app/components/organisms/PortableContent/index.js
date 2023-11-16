
import Img from "@/utils/Img";
import styles from './styles.module.scss';

const sanityConfig = {projectId: process.env.GATSBY_SANITY_PROJECT_ID, dataset: process.env.GATSBY_SANITY_DATASET}

export const ImageComponent = ({ value, ...props }) => {
  console.log(value);
  const imageData = getGatsbyImageData(value?.asset._ref, { maxWidth: 1024 }, sanityConfig);
  return (
    <Img data={imageData} className={styles.img} {...props} />
  )
}

const components = {
  types: {
    image: ImageComponent,
    quickForm: ({ value: { heading, subheading, cta} }) => <QuickForm data={{heading,subheading, cta}} isPortableContent={true} />,
    orderedList: ({ value: { array, paragraph }}) => <OrderedList paragraph={paragraph} array={array} />,
    unorderedList: ({ value: { array }}) => {
      const newArray = array.map(obj => {
        return { ...obj, icon: <ImageComponent value={obj.icon} /> };
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
    largeParagraph: ({ children }) => <p className="largeParagraph">{children}</p>,
  },
  listItem : {
    bullet: ({ children }) => <li><Star /><span>{children}</span></li>,
  },
  list: {
    bullet: ({ children }) => <ul className="portableList">{children}</ul>,
    number: ({ children }) => <ol className="portableList">{children}</ol>,
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
    <section>
      <PortableText
        value={data}
        components={components}
      />
    </section>
  );
}
export default PortableContent