import Vide from "@rbxts/vide";

import { anchorPoints, positions } from "./utility/positioning";

import { CardAspectRatio, CardImage, type CardImageProps } from "./card-image";

interface CardProps extends CardImageProps {}

export function Card({ name, suit, position, anchorPoint, size }: CardProps): Vide.Node {
  return (
    <imagebutton
      AnchorPoint={anchorPoint ?? anchorPoints.center}
      Position={position ?? positions.center}
      Size={size ?? UDim2.fromScale(1, 1)}
      BackgroundTransparency={1}
    >
      <CardAspectRatio />
      <CardImage name={name} suit={suit} />
    </imagebutton>
  )
}