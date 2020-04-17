import React from "react";
import clsx from "clsx";
interface Props {
  className?: string;
}

export default function Hero({ className }: Props) {
  return (
    <div className={clsx("hero", className)}>
      <div className="hero-section">
        <h1>Le cours de Web</h1>
        <blockquote>
          <i className="quote">
            Mankind invented the atomic bomb, but no mouse would ever construct
            a mousetrap.
          </i>
          <br />
          Albert Einstein
        </blockquote>
      </div>
    </div>
  );
}
