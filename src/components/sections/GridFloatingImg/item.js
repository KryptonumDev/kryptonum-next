'use client'
import styles from './styles.module.scss';
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const options = {
  damping: 30,
  stiffness: 200,
};

const Item = ({ title, description, img, href, Arrow }) => {
  const wrapperRef = useRef(null);
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };
  const handleMouseMove = (e) => {
    const wrapper = wrapperRef.current;
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouse.x.set(x);
    mouse.y.set(y);
  };
  useEffect(() => {
    const wrapper = wrapperRef.current;
    wrapper.addEventListener("mousemove", handleMouseMove);
    return () => wrapper.removeEventListener("mousemove", handleMouseMove);
  });

  return (
    <div className={styles.item} ref={wrapperRef}>
      {href && href}
      <motion.div
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
        className={styles.img}
      >
        {img}
      </motion.div>
      <h2>
        <span>{title}</span>
        {Arrow}
      </h2>
      {description}
    </div>
  );
};

export default Item;