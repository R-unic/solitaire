import { callMethodOnDependencies } from "@rbxts/flamework-meta-utils";

import { Message, messaging, type MessageData } from "shared/messaging";

/** @metadata reflect identifier */
export function OnMessage<Kind extends Message>(message: Kind) {
  return (ctor: object, propertyKey: string, descriptor: TypedPropertyDescriptor<(this: unknown, data: MessageData[Kind]) => void>) =>
    void messaging.client.on(message, data => callMethodOnDependencies(ctor, descriptor, data));
}