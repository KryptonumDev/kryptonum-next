import NextImage from "next/image";

const Img = ({ data, width, height, sizes,loading, ...props }) =>
  data?.asset.url && (
    <NextImage
      src={data.asset.url}
      alt={data.asset.altText || ""}
      width={width || data.asset.metadata.dimensions.width}
      height={height || data.asset.metadata.dimensions.height}
      sizes={sizes}
      loading={loading}
      {...(data?.asset.metadata.lqip && {
        blurDataURL: data.asset.metadata.lqip,
        placeholder: "blur",
      })}
      {...props}
    />
  );

export default Img;
