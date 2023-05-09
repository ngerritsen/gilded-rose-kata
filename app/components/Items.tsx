import { css, useTheme } from "@emotion/react";

import useItems from "../hooks/useItems";
import Button from "./Button";
import Container from "./Container";
import Item from "./Item";

const Items = () => {
  const { items, onNext, onBack, hasHistory } = useItems();
  const theme = useTheme();

  return (
    <main
      css={css`
        padding: 3.2rem 0;
      `}
    >
      <Container>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;
          `}
        >
          <Button disabled={!hasHistory} onClick={onBack}>
            Previous day
          </Button>
          <Button onClick={onNext}>Next day</Button>
        </div>
        <ul
          css={css`
            display: grid;
            gap: 1.6rem;
            list-style: none;
            padding: 0;
            margin: 0;
            grid-template-columns: 1fr;

            @media (min-width: ${theme.breakpoints.sm}) {
              grid-template-columns: repeat(2, 1fr);
            }

            @media (min-width: ${theme.breakpoints.md}) {
              grid-template-columns: repeat(3, 1fr);
            }
          `}
        >
          {items.map((item) => (
            <Item key={item.name + item.quality + item.sellIn} item={item} />
          ))}
        </ul>
      </Container>
    </main>
  );
};

export default Items;
