import React from "react";
import Header from "./Header";

interface Props {
  children: any;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header></Header>
      <div className="content">{children}</div>
    </>
  );
}
