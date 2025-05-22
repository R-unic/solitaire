import Vide from "@rbxts/vide";

import { usePx } from "./utility/hooks";

interface CardListLayoutProps {
  readonly horizontalAlignment: Enum.HorizontalAlignment["Name"];
}

export function CardListLayout({ horizontalAlignment }: CardListLayoutProps): Vide.Node {
  const px = usePx();

  return (
    <uilistlayout
      FillDirection="Horizontal"
      VerticalAlignment="Top"
      HorizontalAlignment={horizontalAlignment}
      Padding={new UDim(0, px(6))}
    />
  );
}
