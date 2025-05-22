import Vide from "@rbxts/vide";

export interface ContainerProps {
  readonly name?: string;
  readonly position?: UDim2;
  readonly anchorPoint?: Vector2;
  readonly size?: UDim2;
  readonly color?: Color3;
  readonly transparency?: number;
  readonly layoutOrder?: Vide.Derivable<number>;
}

export function Container({ name, position, anchorPoint, size, transparency: backgroundTransparency, layoutOrder, children }: ContainerProps & Vide.PropsWithChildren): Vide.Node {
  return (
    <frame
      Name={name}
      AnchorPoint={anchorPoint}
      Position={position}
      Size={size}
      BackgroundTransparency={backgroundTransparency ?? 0.9}
      LayoutOrder={layoutOrder}
    >
      {children}
    </frame>
  )
}