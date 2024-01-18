import { toPlainText } from '@portabletext/react';
import styles from './styles.module.scss';

const readingTime = (text) => {
  const countWords = (text) => {
    const trimmedText = text.trim();
    if (trimmedText === '') {
      return 0;
    }
    const words = trimmedText.split(/\s+/);
    return words.length;
  };
  const plainText = toPlainText(text);
  const words = countWords(plainText);
  const averageReadingSpeedWordsPerMinute = 200;
  const readingTime = Math.ceil(words / averageReadingSpeedWordsPerMinute);
  return readingTime;
};

const ReadingTime = ({ content, ...props }) => {
  return (
    <p
      className={styles.readingTime}
      {...props}
    >
      <Clock />
      <span>{readingTime(content)} min czytania</span>
    </p>
  );
};

export default ReadingTime;

const Clock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="none"
    viewBox="0 0 25 25"
  >
    <path
      stroke="#EFF0F3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12.426 6.205v6l4 2m6-2c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z"
    ></path>
  </svg>
);