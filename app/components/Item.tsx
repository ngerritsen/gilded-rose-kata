import { css, useTheme } from "@emotion/react";

import { Item as ItemType } from "../types";
import Quality from "./Quality";

type ItemProps = {
  item: ItemType;
};

const Item = ({ item }: ItemProps) => {
  const theme = useTheme();

  return (
    <li
      css={css`
        display: grid;
        grid-template-columns: 1fr 3rem;
        gap: 1.6rem;
        background-color: white;
        padding: 2.4rem;
        border-radius: 6px;
      `}
      key={item.name + item.quality + item.sellIn}
    >
      <div>
        <h3
          css={css`
            margin: 0 0 1.6rem;
          `}
        >
          {item.name}
        </h3>
        <p
          css={css`
            margin: 0;
            padding: 0;
            color: ${item.sellIn < 0 ? theme.colors.grey : "inherit"};
          `}
        >
          Days left: {item.sellIn}
        </p>
      </div>
      <div>
        <Quality quality={item.quality} />
      </div>
    </li>
  );
};

export default Item;
