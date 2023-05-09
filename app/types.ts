import React from "react";

export type Item = {
  name: string;
  sellIn: number;
  quality: number;
};

export type ChildrenProp =
  | React.JSX.Element
  | React.JSX.Element[]
  | string
  | number;
