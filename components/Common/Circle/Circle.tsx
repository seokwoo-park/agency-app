import React from "react";

type Props = {
  backgroundColor?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const Circle = (props: Props) => {
  return <div className="circle" style={{ ...props }} />;
};

export default Circle;
