import { ChildrenProp } from "@/types";
import { css } from "@emotion/react";
import React from "react";

type ContainerProps = {
  children: ChildrenProp;
};

const Container = ({ children }: ContainerProps) => (
  <div
    css={css`
      padding: 0 3.2rem;
      margin: 0 auto;
      max-width: 100rem;
    `}
  >
    {children}
  </div>
);

export default Container;
