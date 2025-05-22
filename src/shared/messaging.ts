import { MessageEmitter } from "@rbxts/tether";
import type { DataType } from "@rbxts/flamework-binary-serializer";

export const messaging = MessageEmitter.create<MessageData>();

export const enum Message {
  DealHand
}

interface MessageData {
  [Message.DealHand]: {
    readonly name: DataType.u8,
    readonly suit: DataType.u8
  }[];
}