import Vide from "@rbxts/vide";

import { anchorPoints, positions } from "./utility/positioning";

import { CardAspectRatio, CardUICorner } from "./card-image";
import type { ContainerProps } from "./container";

interface CardHolderProps extends ContainerProps, Vide.PropsWithChildren {}

export function CardHolder({ position, anchorPoint, size, layoutOrder, children }: CardHolderProps): Vide.Node {
  return (
    <frame
      Name="CardHolder"
      AnchorPoint={anchorPoint ?? anchorPoints.center}
      Position={position ?? positions.center}
      BackgroundColor3={new Color3}
      Size={size ?? UDim2.fromScale(0.55, 0.55)}
      BackgroundTransparency={0.9}
      LayoutOrder={layoutOrder}
    >
      <CardAspectRatio />
      <CardUICorner />
      {children}
    </frame>
  )
}