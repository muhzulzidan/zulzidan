// CodeBlock.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code, language }) => {
    return (
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
