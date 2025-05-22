import { shuffle } from "@rbxts/array-utils";
import Vide from "@rbxts/vide";

import { story } from "./story";
import { fullDeck, split } from "shared/utility/cards";
import { App } from "client/ui/app";

const [hand, stack] = split(shuffle(fullDeck));
export = story(() => <App hand={hand} stack={stack} />);