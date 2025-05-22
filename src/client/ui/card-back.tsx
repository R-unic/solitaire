import Vide from "@rbxts/vide";

import { Assets } from "shared/constants";
import { anchorPoints, positions } from "./utility/positioning";

import { CardAspectRatio, CardUICorner } from "./card-image";
import type { ContainerProps } from "./container";

interface CardBackProps extends ContainerProps {}

export function CardBack({ position, anchorPoint, size }: CardBackProps): Vide.Node {
  return (
    <imagebutton
      Name="CardBack"
      AnchorPoint={anchorPoint ?? anchorPoints.center}
      Position={position ?? positions.center}
      Size={size ?? UDim2.fromScale(1, 1)}
      BackgroundTransparency={1}
    >
      <CardAspectRatio />
      <imagelabel
        AnchorPoint={anchorPoint ?? anchorPoints.center}
        Position={position ?? positions.center}
        Size={size ?? UDim2.fromScale(1, 1)}
        Image={Assets.Cards.Back.Texture}
      >
        <CardAspectRatio />
        <CardUICorner />
      </imagelabel>
    </imagebutton>
  )
}