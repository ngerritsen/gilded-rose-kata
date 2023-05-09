import { css, useTheme } from "@emotion/react";
import Container from "./Container";

const Header = () => {
  const theme = useTheme();
  return (
    <header
      css={css`
        padding: 3.2rem 0;
        color: white;
        background-color: ${theme.colors.dark};
      `}
    >
      <Container>
        <h1
          css={css`
            font-size: 3rem;
          `}
        >
          🧝‍♂️ Gilded Rose
        </h1>
      </Container>
    </header>
  );
};

export default Header;
