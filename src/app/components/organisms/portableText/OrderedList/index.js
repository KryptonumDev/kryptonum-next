import Markdown from "@/utils/markdown";
import OrderedListClient from '@/app/components/molecules/portableText/OrderedListClient';

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