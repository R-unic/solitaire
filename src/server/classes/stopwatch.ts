import { atom } from "@rbxts/charm";

export class Stopwatch {
  public readonly elapsed = atom(0);
  private currentElapsed = 0;
  private active = false;

  public start(): void {
    this.active = true;
  }

  public stop(): void {
    this.active = false;
    this.elapsed(0);
    this.currentElapsed = 0;
  }

  public isActive(): boolean {
    return this.active;
  }

  public update(dt: number): void {
    if (!this.active) return;

    this.currentElapsed += dt;
    if (this.currentElapsed >= 1) {
      this.currentElapsed -= 1;
      this.elapsed(this.elapsed() + 1);
    }
  }
}