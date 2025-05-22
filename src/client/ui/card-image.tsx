import Vide from "@rbxts/vide";

import { Assets } from "shared/constants";
import { anchorPoints, positions } from "./utility/positioning";
import { usePx } from "./utility/hooks";

export interface CardImageProps {
  readonly name: CardName;
  readonly suit: CardSuit;
  readonly position?: UDim2;
  readonly anchorPoint?: Vector2;
  readonly size?: UDim2;
}

export function CardImage({ name, suit, position, anchorPoint, size }: CardImageProps): Vide.Node {
  const px = usePx();
  const cardImage = Assets.Cards[suit][name];

  return (
    <imagelabel
      AnchorPoint={anchorPoint ?? anchorPoints.center}
      Position={position ?? positions.center}
      Size={size ?? UDim2.fromScale(1, 1)}
      Image={cardImage.Texture}
    >
      <uicorner CornerRadius={new UDim(0, px(22))} />
    </imagelabel>
  );
}