import Vide from "@rbxts/vide";
import { Card } from "./card";

export function App(): Vide.Node {
  return (
    <>
      <uilistlayout FillDirection="Horizontal" VerticalAlignment="Center" HorizontalAlignment="Center" />
      <uiaspectratioconstraint AspectRatio={852 / 393} />
      <Card name="Ace" suit="Spades" />
      <Card name="Ace" suit="Clubs" />
    </>
  );
}