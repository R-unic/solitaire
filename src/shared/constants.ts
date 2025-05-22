import { ReplicatedFirst } from "@rbxts/services";
import Signal from "@rbxts/lemon-signal";

import type { CardName, CardSuit } from "./structs/cards";

export const Assets = ReplicatedFirst.Assets;
export const DEFAULT_CARD_SIZE = 130;

export const FlameworkIgnited = new Signal;