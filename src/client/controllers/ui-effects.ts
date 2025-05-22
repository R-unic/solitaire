import { Controller, OnStart } from "@flamework/core";
import { TweenBuilder } from "@rbxts/twin";

import { PlayerGui } from "client/utility";

@Controller()
export class UIEffectsController implements OnStart {
  private readonly screen = new Instance("ScreenGui", PlayerGui);
  private readonly blackFrame = new Instance("Frame", this.screen);

  public onStart(): void {
    this.screen.Name = "UIEffects";
    this.screen.DisplayOrder = 10;
    this.screen.ScreenInsets = Enum.ScreenInsets.DeviceSafeInsets;

    this.blackFrame.Name = "Black";
    this.blackFrame.Size = UDim2.fromScale(1, 1);
    this.blackFrame.BackgroundColor3 = new Color3;
    this.blackFrame.Transparency = 1;
  }

  public blackFade<Disable extends boolean = false>(manualDisable: Disable = false as Disable, timeBetween = 0.5, fadeTime = 0.65): Disable extends true ? () => Tween : void {
    type RType = Disable extends true ? () => Tween : void;

    const toggle = (on: boolean) =>
      TweenBuilder.for(this.blackFrame)
        .time(fadeTime)
        .style(Enum.EasingStyle.Sine)
        .property("Transparency", on ? 0 : 1)
        .play();

    const fadeIn = toggle(true);
    const conn = fadeIn.Completed.Once(() => {
      fadeIn.Destroy();
      task.wait(timeBetween);

      if (!manualDisable)
        toggle(false);
    });

    return (manualDisable === true ? () => {
      toggle(false);
      conn.Disconnect(); // just in case
    } : void 0) as RType;
  }
}