"use client";

import Image from 'next/image';

export default function ArticleImage({ newsUrl, width, height }) {
	return (
		<Image loader={() => `${newsUrl}`} src="noimage.png" alt="No Image" width={width} height={0} priority={false} style={{height: 'auto'}} />
	)
}
