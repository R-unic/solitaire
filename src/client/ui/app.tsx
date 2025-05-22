import Vide from "@rbxts/vide";

import { anchorPoints, positions } from "./utility/positioning";
import { usePx } from "./utility/hooks";

import { Container } from "./container";
import { Card } from "./card";
import { CardHolder } from "./card-holder";
import { CardListLayout } from "./card-list-layout";
import { AceSlot } from "./ace-slot";
import { CardBack } from "./card-back";

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
        anchorPoint={anchorPoints.bottomLeft}
        position={UDim2.fromScale(0, 0.19)}
        size={UDim2.fromScale(0.575, 0.135)}
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
        size={UDim2.fromScale(1, 0.3)}
      >
        <CardListLayout horizontalAlignment="Left" />
        <Vide.For each={() => numberList(7)}>
          {(_, n) => (
            <CardHolder layoutOrder={n}>
              <uilistlayout
                FillDirection="Vertical"
                VerticalAlignment="Top"
                HorizontalAlignment="Center"
                Padding={new UDim(-0.8, 0)}
              />
              <Vide.For each={() => numberList(n() - 1)}>
                {() => <CardBack />}
              </Vide.For>
              <Card name="Queen" suit="Hearts" />
            </CardHolder>
          )}
        </Vide.For>
      </Container>
    </Container>
  );
}