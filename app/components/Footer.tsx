import { css, useTheme } from "@emotion/react";
import Container from "./Container";

const Footer = () => {
  const theme = useTheme();

  return (
    <footer>
      <Container>
        <p
          css={css`
            text-align: center;
            color: ${theme.colors.grey};
          `}
        >
          By Niels Gerritsen
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
