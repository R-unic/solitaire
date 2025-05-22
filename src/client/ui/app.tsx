import Vide from "@rbxts/vide";

import { anchorPoints, positions } from "./utility/positioning";
import { usePx } from "./utility/hooks";

import { Container } from "./container";
import { Card } from "./card";
import { CardHolder } from "./card-holder";
import { CardListLayout } from "./CardListLayout";
import { AceSlot } from "./ace-slot";

function numberList(size: number, startsAt = 0): number[] {
  const numbers: number[] = [];

  for (const n of $range(startsAt, startsAt + size - 1))
    numbers.push(n);

  return numbers;
}

export function App(): Vide.Node {
  const px = usePx();
  const horizontalPadding = new UDim(0, px(6));

  return (
    <Container
      anchorPoint={anchorPoints.center}
      position={positions.center}
      size={UDim2.fromScale(1, 1)}
    >
      <uipadding PaddingLeft={horizontalPadding} PaddingRight={horizontalPadding} />
      <uiaspectratioconstraint AspectRatio={620 / 852} />
      <Container
        name="Aces"
        anchorPoint={anchorPoints.topCenter}
        position={UDim2.fromScale(0.5, 0.06)}
        size={UDim2.fromScale(1, 0.13)}
      >
        <CardListLayout horizontalAlignment="Left" />
        <Vide.For each={() => numberList(4)}>
          {AceSlot}
        </Vide.For>
      </Container>
      <Container
        name="Hand"
        anchorPoint={anchorPoints.topCenter}
        position={UDim2.fromScale(0.5, 0.2)}
        size={UDim2.fromScale(1, 0.25)}
      >
        <CardListLayout horizontalAlignment="Center" />
        <Vide.For each={() => numberList(7)}>
          {(_, n) => (
            <CardHolder>
              <Card name="Queen" suit="Hearts" />
            </CardHolder>
          )}
        </Vide.For>
      </Container>
    </Container>
  );
}