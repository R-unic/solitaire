interface ReplicatedFirst extends Instance {
  Assets: Folder & {
    Cards: Folder & {
      Back: Decal;
    } & {
      [K in CardSuit]: Folder & { [K in CardName]: Decal }
    };
  };
}