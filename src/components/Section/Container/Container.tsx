import React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <div>{children}</div>;
};

export default Container;
