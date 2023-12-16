import * as React from "react"

export default function Head({ title, description, image, url, publishDate }) {
    const schemaOrgJSONLD = {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "image": image ? image.url : '',
        "author": {
            "@type": "Person",
            "name": "zulzidan"
        },
        "datePublished": publishDate,
        "description": description,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        },
        "articleBody": description,
        "publisher": {
            "@type": "Organization",
            "name": "Zulzidan",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.zulzidan.com/logo.png"
            }
        }


    };

    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>
            {description && (
                <meta
                    name="description"
                    property="og:description"
                    content={description}
                />
            )}
            <link rel="canonical" href={url} />
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content="zulzidan" />
            <meta name="twitter:site" content="@zulzidan" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title} />
            {image && <meta property="og:image" content={image.url} />}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            {description && <meta name="twitter:description" content={description} />}
            {image && <meta name="twitter:image" content={image.url} />}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
        </>
    )
}