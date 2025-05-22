import Vide from "@rbxts/vide";

import { anchorPoints, positions } from "./utility/positioning";
import { CardImage, type CardImageProps } from "./card-image";

interface CardProps extends CardImageProps {}

export function Card({name, suit, position, anchorPoint}: CardProps): Vide.Node {
  return (
    <imagebutton
      AnchorPoint={anchorPoint ?? anchorPoints.center}
      Position={position ?? positions.center}
      BackgroundTransparency={1}
      Size={UDim2.fromScale(0.3, 0.3)}
    >
      <uiaspectratioconstraint AspectRatio={0.7} />
      <CardImage name={name} suit={suit} />
    </imagebutton>
  )
}