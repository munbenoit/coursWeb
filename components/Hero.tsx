import React from "react";
interface Props {
  title: string;
  quote: string;
  author: string;
  className?: string;
}

export default function Hero({ title, quote, author, className }: Props) {
  return (
    <div className={className}>
      <div className="hero-section">
        <h1>{title}</h1>
        <blockquote>
          <i className="quote">{quote}</i>
          <br />
          {author}
        </blockquote>
      </div>
    </div>
  );
}
