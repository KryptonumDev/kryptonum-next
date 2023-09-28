import React from "react";
import { toPlainText } from '@portabletext/react';
import { Clock } from "../Icons";
import styles from "./styles.module.scss";

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

const ReadingTime = ({ content }) => {
  return (
    <p className={styles.readingTime}>
      <Clock />
      <span>{readingTime(content)} min czytania</span>
    </p>
  );
}


export default ReadingTime;