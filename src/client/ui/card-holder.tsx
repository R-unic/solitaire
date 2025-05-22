import Vide from "@rbxts/vide";

import { anchorPoints, positions } from "./utility/positioning";

import { CardAspectRatio, CardUICorner } from "./card-image";
import type { ContainerProps } from "./container";

interface CardHolderProps extends ContainerProps, Vide.PropsWithChildren {}

export function CardHolder({ position, anchorPoint, size, children }: CardHolderProps): Vide.Node {
  return (
    <frame
      AnchorPoint={anchorPoint ?? anchorPoints.center}
      Position={position ?? positions.center}
      BackgroundColor3={new Color3}
      BackgroundTransparency={0.9}
      Size={size ?? UDim2.fromScale(0.55, 0.55)}
    >
      <CardAspectRatio />
      <CardUICorner />
      {children}
    </frame>
  )
}