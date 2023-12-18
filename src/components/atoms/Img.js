import NextImage from "next/image";

const defaultPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEBL6DwABYwElBoU80gAAAABJRU5ErkJggg==";

const Img = ({ src, alt = "", data, width, height, sizes, loading, priority, ...props }) => (
  <NextImage
    src={data?.asset.url || src}
    alt={data?.asset.altText || alt}
    width={width || data?.asset.metadata.dimensions?.width}
    height={height || data?.asset.metadata.dimensions?.height}
    loading={loading}
    priority={priority}
    sizes={sizes}
    {...(
      width || data?.asset.metadata.dimensions?.width > 40 ||
      height || data?.asset.metadata.dimensions?.height > 40 && {
        placeholder: "blur",
        blurDataURL: data?.asset.metadata?.lqip || defaultPlaceholder,
      }
    )}
    {...props}
  />
);

export default Img;
