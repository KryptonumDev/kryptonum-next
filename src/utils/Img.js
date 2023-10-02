import React from "react"
import NextImage from "next/image"

const Img = ({
  data,
  srcParamsString,
  ...props
}) =>(
  data?.asset.url && (
    <NextImage
      src={srcParamsString? `${data.asset.url}${srcParamsString}` : `${data.asset.url}`}
      alt={data.asset.altText || ''}
      width={data.asset.metadata.dimensions.width}
      height={data.asset.metadata.dimensions.height}
      {...(data?.asset.metadata.lqip && {
        blurDataURL: data.asset.metadata.lqip,
        placeholder: "blur",
      })}
      {...props}
    />
  )
)

export default Img;