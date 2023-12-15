import { Fragment } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import type { Components } from "react-markdown";

import AppChart from "./Chart";

interface AppMarkdownProps {
  children: string;
  chartsData?: object;
}

// function isElementWithTagName(node: any): node is Element {
//   return node && typeof node === 'object' && 'tagName' in node;
// }

export default function AppMarkdown({
  children,
  chartsData,
}: AppMarkdownProps) {
  const components: Partial<Components & { chart: object }> = {
    p: ({ node, ...props }) => {
      return node?.children.find((elementContent) => {
        // @ts-expect-error WIP
        return elementContent.tagName && elementContent.tagName == "chart";
      }) ? (
        <Fragment {...props}></Fragment>
      ) : (
        <p {...props}></p>
      );
    },
    chart({ ...props }) {
      return chartsData ? (
        // @ts-expect-error WIP
        <AppChart {...props} id={props.id} chartData={chartsData} />
      ) : (
        <div>ChartWithoutAData</div>
      );
    },
  };

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {children}
    </Markdown>
  );
}
