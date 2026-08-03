import React from 'react'
import { GatsbyImage } from "./legacy-image";

const ContentfulImage = ({ imageDetails, alt }) => {

    const file = imageDetails?.file?.en_US || imageDetails?.file || {};
    const image = {
        url: file.url?.startsWith('//') ? `https:${file.url}` : file.url,
        width: file.details?.image?.width,
        height: file.details?.image?.height,
    };

    return <GatsbyImage image={image} alt={alt} quality={100} />;
}


export default ContentfulImage
