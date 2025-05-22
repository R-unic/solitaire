import Vide from "@rbxts/vide";

import { story } from "./story";
import { CardName, CardSuit } from "shared/structs/cards";

import { Card } from "client/ui/card";

export = story(() => <Card name={CardName.Queen} suit={CardSuit.Hearts} />);