import { BLOCKS } from '@contentful/rich-text-types';

const generateTableOfContents = (rawContent) => {
    const content = JSON.parse(rawContent);
    let tableOfContents = [];

    const extractHeadings = (node) => {
        if (node.nodeType === BLOCKS.HEADING_2) {
            tableOfContents.push(node.content[0].value.trim());
        }

        if (node.content) {
            node.content.forEach(extractHeadings);
        }
    }

    content.content.forEach(extractHeadings);

    return tableOfContents;
}

export default generateTableOfContents;