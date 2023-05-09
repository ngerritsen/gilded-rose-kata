import { css, Global, useTheme } from "@emotion/react";
import Items from "./Items";
import Header from "./Header";

const App = () => {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }

          body {
            background-color: ${theme.colors.subtleBg};
            font-family: sans-serif;
            font-size: 1.6rem;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Header />
      <Items />
    </>
  );
};

export default App;
