export interface Card {
  readonly name: CardName;
  readonly suit: CardSuit;
}

export enum CardName {
  King,
  Queen,
  Jack,
  Ten,
  Nine,
  Eight,
  Seven,
  Six,
  Five,
  Four,
  Three,
  Two,
  Ace
}

export enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}