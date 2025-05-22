import { callMethodOnDependencies } from "@rbxts/flamework-meta-utils";

import { Message, messaging, type MessageData } from "shared/messaging";

/** @metadata reflect identifier */
export function OnMessage<Kind extends Message>(message: Kind) {
  return (ctor: object, propertyKey: string, descriptor: TypedPropertyDescriptor<(this: unknown, player: Player, data: MessageData[Kind]) => void>) =>
    void messaging.server.on(message, (player, data) => callMethodOnDependencies(ctor, descriptor, player, data));
}