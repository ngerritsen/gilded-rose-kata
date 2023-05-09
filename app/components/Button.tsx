import React from "react";
import { ChildrenProp } from "@/types";
import { css, useTheme } from "@emotion/react";
import { darken } from "polished";

type ButtonProps = {
  onClick?: () => void;
  children: ChildrenProp;
  disabled?: boolean;
};

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  const theme = useTheme();

  return (
    <button
      disabled={disabled}
      css={css`
        color: white;
        border-radius: 4px;
        padding: 1.6rem 2rem;
        font-size: 1.6rem;
        font-weight: bold;
        border: none;
        background-color: ${theme.colors.grey};

        ${!disabled &&
        `
          background-color: ${theme.colors.blue};
          cursor: pointer;

          &:hover,
          &:focus {
            background-color: ${darken(0.05, theme.colors.blue)};
          }
        `}
      `}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
