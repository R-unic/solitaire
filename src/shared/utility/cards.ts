import { slice } from "@rbxts/array-utils";
import type { DataType } from "@rbxts/flamework-binary-serializer";

import { type Card, CardName, CardSuit } from "shared/structs/cards";


export const card = (name: CardName, suit: CardSuit): Card => ({ name, suit });
export const packCard = (card: Card): DataType.u8 => (card.name << 2) | card.suit;
export const unpackCard = (packed: DataType.u8): Card => card(packed >> 2, packed & 0b11);

const HAND_SIZE = 28;
const HAND_ROWS = 7;
export const split = (deck: Card[]): LuaTuple<[hand: Card[], stack: Card[]]> =>
  $tuple(
    slice(deck, 0, HAND_SIZE),
    slice(deck, HAND_SIZE)
  );

export const splitHand = (hand: Card[]) => {
  const rows: [Card[], Card[], Card[], Card[], Card[], Card[], Card[]] = [[], [], [], [], [], [], []];
  for (const row of $range(1, HAND_ROWS))
    for (const _ of $range(0, row - 1)) {
      if (hand.size() === 0) break;
      rows[row - 1].push(hand.pop()!);
    }

  return rows;
}

export const take = (deck: Card[], count: number): Card[] => {
  const taken: Card[] = [];
  for (const _ of $range(1, count)) {
    const card = deck.pop();
    if (card === undefined) break;
    taken.push(card);
  }

  return taken;
}

export const fullDeck: Card[] = [];
for (const [_, suit] of pairs(CardSuit))
  for (const [_, name] of pairs(CardName))
    fullDeck.push(card(name, suit));