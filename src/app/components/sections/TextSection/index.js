import TextComponent from "../../molecules/TextComponent";

const TextSection = ({data, additionalStyles} ) => {
  return (
    <section>
      <TextComponent data={data} additionalStyles={additionalStyles}/>
    </section>
  )
}
export default TextSection;