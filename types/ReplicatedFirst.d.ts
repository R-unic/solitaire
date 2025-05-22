interface ReplicatedFirst extends Instance {
  Assets: Folder & {
    Cards: Folder & {
      [K in CardSuit]: Folder & { [K in CardName]: Decal }
    };
  };
}