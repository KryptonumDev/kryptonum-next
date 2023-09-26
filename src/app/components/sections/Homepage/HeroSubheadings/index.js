const HeroSubheading = ({ children }) => {
  return (
      <ol>
        {children.map((subheading, i) => (
          <li key={i}>{subheading}</li>
        ))}
      </ol>
  );
};

export default HeroSubheading;
