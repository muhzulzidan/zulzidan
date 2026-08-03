// RichTextRenderer.jsx
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RichTextRenderer = ({ content, options }) => {
    const references = new Map((content?.references || []).map((reference) => [reference.contentful_id, reference]));
    const document = JSON.parse(content?.raw || '{"nodeType":"document","data":{},"content":[]}');

    const resolveTargets = (node) => {
        const targetId = node?.data?.target?.sys?.id;
        if (targetId && references.has(targetId)) node.data.target = references.get(targetId);
        node?.content?.forEach(resolveTargets);
    };

    resolveTargets(document);
    return documentToReactComponents(document, options);
};

export default RichTextRenderer;
