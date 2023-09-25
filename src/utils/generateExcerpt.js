const generateExcerpt = (rawContent) => {
    const content = JSON.parse(rawContent);
    let plainText = '';

    const extractText = (node) => {
        if (node.nodeType === 'text') {
            plainText += node.value.trim() + ' ';
        }

        if (node.content) {
            node.content.forEach(extractText);
        }
    }

    content.content.forEach(extractText);
    plainText = plainText.replace(/\n/g, '').replace(/\s+/g, ' ').trim();

    const maxLength = 150;
    return plainText.length <= maxLength ? plainText : `${plainText.slice(0, maxLength)}...`;
}

export default generateExcerpt;
