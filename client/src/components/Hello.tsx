import React from "react";

type HelloProps = {
  compiler: string;
  framework: string;
};

const Hello: React.FC<HelloProps> = (props) => {
  const { compiler, framework } = props;
  return (
    <h1>
      Hello from {compiler} and {framework}
    </h1>
  );
};

export { Hello };
