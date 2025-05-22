import { Controller } from "@flamework/core";
import type { DataType } from "@rbxts/flamework-binary-serializer";
import Vide from "@rbxts/vide";

import { OnMessage } from "client/decorators";
import { Message } from "shared/messaging";
import { PlayerGui } from "client/utility";
import { App } from "client/ui/app";
import { split, unpackCard } from "shared/utility/cards";

import type { UIEffectsController } from "./ui-effects";

@Controller()
export class MainController {
  private readonly fadeIn;

  public constructor(
    private readonly uiEffects: UIEffectsController
  ) {
    this.fadeIn = this.uiEffects.blackFade(true);
  }

  /** @hidden */
  @OnMessage(Message.DealCards)
  public onCardsDealt(deck: DataType.u8[]): void {
    const [hand, stack] = split(deck.map(unpackCard));
    this.fadeIn();
    Vide.mount(() => (
      <screengui>
        <App hand={hand} stack={stack} />
      </screengui>
    ), PlayerGui);
  }


}