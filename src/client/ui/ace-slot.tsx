import Vide from "@rbxts/vide";

import { anchorPoints, positions } from "./utility/positioning";
import { usePx } from "./utility/hooks";

import { CardHolder } from "./card-holder";

export function AceSlot(): Vide.Node {
  const px = usePx();
  return (
    <CardHolder size={UDim2.fromScale(1, 1)}>
      <textlabel
        Text="A"
        TextColor3={new Color3(1, 1, 0)}
        TextScaled={true}
        AnchorPoint={anchorPoints.center}
        Position={positions.center}
        Size={UDim2.fromScale(0.55, 0.5)}
        BackgroundTransparency={1}
        Font={Enum.Font.Fantasy}
      >
        <uistroke Thickness={px(2)} Transparency={0.7} />
      </textlabel>
    </CardHolder>
  );
}