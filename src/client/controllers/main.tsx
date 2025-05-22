import { Controller, type OnStart } from "@flamework/core";
import Vide from "@rbxts/vide";

import { PlayerGui } from "client/utility";
import { App } from "client/ui/app";

import type { UIEffectsController } from "./ui-effects";

@Controller()
export class MainController implements OnStart {
  private readonly fadeIn;

  public constructor(
    private readonly uiEffects: UIEffectsController
  ) {
    this.fadeIn = this.uiEffects.blackFade(true);
  }

  public onStart(): void {
    task.delay(1, () => this.fadeIn());
    Vide.mount(() => (
      <screengui>
        <App />
      </screengui>
    ), PlayerGui);
  }
}