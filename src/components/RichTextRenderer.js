// RichTextRenderer.jsx
import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const RichTextRenderer = ({ content, options }) => {
    return renderRichText(content, options);
};

export default RichTextRenderer;
