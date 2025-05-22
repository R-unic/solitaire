import Vide from "@rbxts/vide";

export interface ContainerProps {
  readonly name?: string;
  readonly position?: UDim2;
  readonly anchorPoint?: Vector2;
  readonly size?: UDim2;
  readonly backgroundTransparency?: number;
}

export function Container({ name, position, anchorPoint, size, backgroundTransparency, children }: ContainerProps & Vide.PropsWithChildren): Vide.Node {
  return (
    <frame
      Name={name}
      AnchorPoint={anchorPoint}
      Position={position}
      Size={size}
      BackgroundTransparency={backgroundTransparency ?? 1}
    >
      {children}
    </frame>
  )
}