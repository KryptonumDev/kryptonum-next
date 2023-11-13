import TextComponent from "../../molecules/TextComponent";

const TextSection = ({data, breakLine} ) => {
  return (
    <section>
      <TextComponent data={data} breakLine={breakLine}/>
    </section>
  )
}
export default TextSection;