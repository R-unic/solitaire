import Vide from "@rbxts/vide";

import { anchorPoints, positions } from "./utility/positioning";
import { usePx } from "./utility/hooks";
import { type Card, CardName, CardSuit } from "shared/structs/cards";

import { Container } from "./container";
import { CardButton } from "./card-button";
import { CardHolder } from "./card-holder";
import { CardListLayout } from "./card-list-layout";
import { AceSlot } from "./ace-slot";
import { CardBack } from "./card-back";
import { splitHand } from "shared/utility/cards";

function numberList(size: number, startsAt = 0): number[] {
  const numbers: number[] = [];

  for (const n of $range(startsAt, startsAt + size - 1))
    numbers.push(n);

  return numbers;
}

interface AppProps {
  readonly hand: Card[];
  readonly stack: Card[];
}

export function App({ hand, stack }: AppProps): Vide.Node {
  const px = usePx();
  const horizontalPadding = new UDim(0, px(6));
  const handRows = splitHand(hand);

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
        size={UDim2.fromScale(0.56, 0.135)}
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
        size={UDim2.fromScale(1, 0.29)}
      >
        <CardListLayout horizontalAlignment="Left" />
        <Vide.For each={() => handRows}>
          {(row, n) => {
            const { name, suit } = row.pop()!;

            return (
              <CardHolder layoutOrder={n}>
                <uilistlayout
                  FillDirection="Vertical"
                  VerticalAlignment="Top"
                  HorizontalAlignment="Center"
                  Padding={new UDim(-0.825, 0)}
                />
                <Vide.For each={() => row}>
                  {() => <CardBack />}
                </Vide.For>
                <CardButton name={name} suit={suit} />
              </CardHolder>
            );
          }}
        </Vide.For>
      </Container>
    </Container>
  );
}