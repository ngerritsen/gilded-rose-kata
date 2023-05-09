import { css, useTheme } from "@emotion/react";
import { MAX_QUALITY } from "../utils/gildedRose";
import { Theme } from "../theme";

type QualityProps = {
  quality: number;
};

const Quality = ({ quality }: QualityProps) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.white};
        border-radius: 5px;
        font-weight: bold;
        background-color: ${getBgColor(theme, quality)};
      `}
    >
      {quality}
    </div>
  );
};

function getBgColor(theme: Theme, quality: number) {
  const percentage = (quality / MAX_QUALITY) * 100;

  if (percentage < 15) {
    return theme.colors.red;
  }

  if (percentage < 35) {
    return theme.colors.orange;
  }

  if (percentage < 65) {
    return theme.colors.grey;
  }

  if (percentage < 90) {
    return theme.colors.blue;
  }

  if (percentage > 100) {
    return theme.colors.purple;
  }

  return theme.colors.green;
}

export default Quality;
