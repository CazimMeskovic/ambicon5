
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const parsedContent = content.replace(/\n/g, "  \n");

  return (
    <ReactMarkdown
      remarkPlugins={[gfm]}
      components={{
        p: ({ node, ...props }) => <p {...props} />,
      }}
    >
      {parsedContent}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer; 