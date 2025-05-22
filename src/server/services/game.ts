import { Service } from "@flamework/core";
import { Janitor } from "@rbxts/janitor";
import { shuffle } from "@rbxts/array-utils";
import { atom, type Atom } from "@rbxts/charm";

import type { OnPlayerJoin, OnPlayerLeave } from "server/hooks";
import { OnMessage } from "server/decorators";
import { Message, messaging } from "shared/messaging";
import { fullDeck, packCard } from "shared/utility/cards";
import { Stopwatch } from "server/classes/stopwatch";

interface GameSession {
  readonly stopwatch: Stopwatch;
  readonly score: Atom<number>;
  readonly moves: Atom<number>;
  readonly janitor: Janitor;
}

function createSession(): GameSession {
  return {
    stopwatch: new Stopwatch,
    score: atom(0),
    moves: atom(0),
    janitor: new Janitor
  };
}

@Service()
export class GameService implements OnPlayerJoin, OnPlayerLeave {
  private readonly sessions = new Map<Player, GameSession>;

  public onPlayerJoin(player: Player): void {
    this.startGame(player);
  }

  public onPlayerLeave(player: Player): void {
    this.sessions.delete(player);
  }

  /** @hidden */
  @OnMessage(Message.StartGame)
  public startGame(player: Player): void {
    if (this.sessions.has(player)) {
      const oldSession = this.sessions.get(player)!;
      this.endSession(oldSession);
      this.sessions.delete(player);
    }

    this.sessions.set(player, createSession());
    this.dealHand(player);
  }

  /** @hidden */
  @OnMessage(Message.MoveMade)
  public onMoveMade(player: Player): void {
    const session = this.sessions.get(player);
    if (session === undefined)
      return player.Kick("stop that");

    session.moves(session.moves() + 1);
    if (!session.stopwatch.isActive())
      session.stopwatch.start();
  }

  private endSession(session: GameSession): void {
    session.stopwatch.stop();
    session.janitor.Destroy();
  }

  private dealHand(player: Player): void {
    messaging.client.emit(player, Message.DealCards, shuffle(fullDeck).map(packCard));
  }
}