import { Fragment, ReactNode } from "react";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import AppChart from "./Chart";

interface AppMarkdownProps {
  children: string;
  chartsData?: object;
}

export default function AppMarkdown({
  children,
  chartsData,
}: AppMarkdownProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        p: ({ node, ...props }) => {
          return node?.children.find(({ tagName }) => tagName == "chart") ? (
            <Fragment {...props}></Fragment>
          ) : (
            <p {...props}></p>
          );
        },
        chart({ node, ...props }) {
          return chartsData ? (
            <AppChart {...props} id={props.id} chartData={chartsData} />
          ) : (
            <div>ChartWithoutAData</div>
          );
        },
      }}
    >
      {children}
    </Markdown>
  );
}
