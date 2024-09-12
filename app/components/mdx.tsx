import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";

function BigTitle(props) {
  return (
    <div className="not-prose">
      <h1 className="mb-2 title !font-serif !font-neutral-800 !text-3xl md:!text-4xl stracking-wider text-center">
        {props.title}
      </h1>
      <div className="mb-8 text-center text-xs uppercase font-semibold tracking-widest text-amber-500 dark:text-amber-400">
        {props.tagline}
      </div>
    </div>
  );
}

function BigTitleTwoLines(props) {
  return (
    <div className="not-prose">
      <h1 className="mb-1 title !text-4xl md:!text-4xl !tracking-wider text-center">
        {props.title}
      </h1>
      <div className="mb-2 title font-light text-3xl md:text-3xl tracking-wider text-center">
        {props.subtitle}
      </div>
      <div className="mb-8 text-center text-xs md:text-sm font-semibold uppercase font-regular tracking-widest text-amber-500 dark:text-amber-400">
        {props.tagline}
        {props.subline && (
          <div className="md:text-xs font-light">{props.subline}</div>
        )}
      </div>
    </div>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function Figure(props) {
  return (
    <figure className="w-4/5 my-6 md:my-8 mx-auto flex flex-col items-center">
      <div className="w-full flex justify-center">
        <Image alt={props.alt} className="rounded-sm" {...props} />
      </div>
      {props.caption && (
        <figcaption className="mt-2 text-center text-xs text-neutral-600 dark:text-neutral-400">
          {props.caption}
        </figcaption>
      )}
    </figure>
  );
}

function Table({ data }) {
  return (
    <table className="w-full border-collapse border border-neutral-300">
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th
              key={index}
              className="border border-neutral-300 px-4 py-2 bg-neutral-100"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="border border-neutral-300 px-4 py-2"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Caption({ children, ...props }) {
  return (
    <div className="mt-2 mb-6 text-center text-xs text-neutral-600 dark:text-neutral-400" {...props}>
      {children}
    </div>
  );
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-\u4e00-\u9fa5]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Figure,
  a: CustomLink,
  code: Code,
  Table,
  BigTitle,
  BigTitleTwoLines,
  Caption,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
