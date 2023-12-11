import NextImage from "next/image";

const defaultPlaceholder =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEBL6DwABYwElBoU80gAAAABJRU5ErkJggg==";

const Img = ({ src, alt = '', data, width, height, sizes, loading, priority, ...props }) => (
	<NextImage
		src={data?.asset.url || src}
		alt={data?.asset.altText || alt}
		width={width || data?.asset.metadata.dimensions?.width }
		height={height || data?.asset.metadata.dimensions?.height}
		sizes={sizes}
		loading={loading}
		priority={priority}
		blurDataURL={data?.asset.metadata?.lqip || defaultPlaceholder}
		placeholder="blur"
		{...props}
	/>
);

export default Img;
