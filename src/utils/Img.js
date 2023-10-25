import React from "react";
import NextImage from "next/image";

const Img = ({ data, width, height, sizes, ...props }) =>
  data?.asset.url && (
    <NextImage
      src={data.asset.url}
      alt={data.asset.altText || ""}
      width={width || data.asset.metadata.dimensions.width}
      height={height || data.asset.metadata.dimensions.height}
      sizes={sizes}
      {...(data?.asset.metadata.lqip && {
        blurDataURL: data.asset.metadata.lqip,
        placeholder: "blur",
      })}
      {...props}
    />
  );

export default Img;
