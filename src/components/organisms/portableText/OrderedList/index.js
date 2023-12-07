import OrderedListClient from '@/components/molecules/portableText/OrderedListClient';
import Markdown from "@/utils/markdown";

const OrderedList = ({ paragraph, array }) => {
  return (
    <OrderedListClient array={array}>
      {paragraph && (
        <Markdown>{paragraph}</Markdown>
      )}
    </OrderedListClient>
  );
}
export default OrderedList;