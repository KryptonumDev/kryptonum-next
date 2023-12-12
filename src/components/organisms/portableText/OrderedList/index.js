import Markdown from "@/utils/markdown";
import List from "./list";

const OrderedList = ({ paragraph, array }) => {
  return (
    <List array={array}>
      {paragraph && (
        <Markdown>{paragraph}</Markdown>
      )}
    </List>
  );
}
export default OrderedList;