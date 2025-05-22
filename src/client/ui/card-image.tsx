import Vide from "@rbxts/vide";

import { Assets } from "shared/constants";
import { CardName, CardSuit } from "shared/structs/cards";
import { anchorPoints, positions } from "./utility/positioning";
import { usePx } from "./utility/hooks";
import type { ContainerProps } from "./container";

export interface CardImageProps extends Omit<ContainerProps, "name"> {
  readonly name: CardName;
  readonly suit: CardSuit;
}

export function CardImage({ name, suit, position, anchorPoint, size }: CardImageProps): Vide.Node {
  const cardImage = Assets.Cards
    .WaitForChild(CardSuit[suit])
    .WaitForChild<Decal>(CardName[name]);

  return (
    <imagelabel
      Name="CardImage"
      AnchorPoint={anchorPoint ?? anchorPoints.center}
      Position={position ?? positions.center}
      Size={size ?? UDim2.fromScale(1, 1)}
      Image={cardImage.Texture}
    >
      <CardAspectRatio />
      <CardUICorner />
    </imagelabel>
  );
}

export function CardUICorner(): Vide.Node {
  const px = usePx();
  return <uicorner CornerRadius={new UDim(0, px.scale(12))} />;
}

export function CardAspectRatio(): Vide.Node {
  return <uiaspectratioconstraint AspectRatio={0.7} />;
}