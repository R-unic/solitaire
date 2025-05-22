import { MessageEmitter } from "@rbxts/tether";
import type { DataType } from "@rbxts/flamework-binary-serializer";

export const messaging = MessageEmitter.create<MessageData>();

export const enum Message {
  StartGame,
  DealCards,
  MoveMade,
}

export interface MessageData {
  [Message.StartGame]: undefined;
  [Message.DealCards]: DataType.u8[];
  [Message.MoveMade]: undefined; // TODO: send actual info
}