import { Controller, type OnStart } from "@flamework/core";

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
  }
}