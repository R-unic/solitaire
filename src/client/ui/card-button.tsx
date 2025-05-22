import Vide from "@rbxts/vide";

import { anchorPoints, positions } from "./utility/positioning";
import { usePx } from "./utility/hooks";
import { DEFAULT_CARD_SIZE } from "shared/constants";

import { CardAspectRatio, CardImage, type CardImageProps } from "./card-image";

interface CardButtonProps extends CardImageProps {}

export function CardButton({ name, suit, position, anchorPoint, size }: CardButtonProps): Vide.Node {
  const px = usePx();

  return (
    <imagebutton
      AnchorPoint={anchorPoint ?? anchorPoints.center}
      Position={position ?? positions.center}
      Size={size ?? UDim2.fromOffset(px(DEFAULT_CARD_SIZE), px(DEFAULT_CARD_SIZE))}
      BackgroundTransparency={1}
    >
      <CardAspectRatio />
      <CardImage name={name} suit={suit} />
    </imagebutton>
  )
}