import Vide from "@rbxts/vide";

import { story } from "./story";
import { CardName, CardSuit } from "shared/structs/cards";

import { CardButton } from "client/ui/card-button";

export = story(() => <CardButton name={CardName.Queen} suit={CardSuit.Hearts} />);