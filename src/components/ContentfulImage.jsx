import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { useContentfulImage } from "gatsby-source-contentful/hooks";

const ContentfulImage = ({ imageDetails, alt }) => {

    const optimizedImage = useContentfulImage({
        image: {
            url: imageDetails.file.en_US.url,
            width: imageDetails.file.en_US.details.image.width,
            height: imageDetails.file.en_US.details.image.height,
        },
    });

    return <GatsbyImage image={optimizedImage} alt={alt} quality={100} />;
}


export default ContentfulImage