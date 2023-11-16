import styles from './styles.module.scss';
import { PortableText } from '@portabletext/react';
import { renderToStaticMarkup } from 'react-dom/server';

const generateHeadings = (portableText) => {
  const content = renderToStaticMarkup(<PortableText value={portableText} onMissingComponent={false} />);
  const headingsRegex = /<h[23].*?>(.*?)<\/h[23]>/g;
  const headingMatches = content.match(headingsRegex);
  if (!headingMatches) {
    return null;
  }
  const listItems = headingMatches.map((match, i) => {
    const tag = match.match(/<\/?(h[23])/)[1];
    const text = match.replace(/<\/?[^>]+(>|$)/g, '');
    return (
      <li key={i} className={tag}>
        <a href={`#${slugify(text)}`} onClick={e => smoothScroll(e)}>{text}</a>
      </li>
    );
  });
  return listItems;
}

const TableOfContent = ({ content }) => {
  return (
    <ul className={styles.wrapper}>
      {generateHeadings(content)}
    </ul>
  );
}

export default TableOfContent;