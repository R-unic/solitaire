import { Flamework } from "@flamework/core";

import { FlameworkIgnited } from "shared/constants";

try {
  Flamework.addPaths("src/client/controllers");
  Flamework.ignite();

  FlameworkIgnited.Fire();
} catch (e) {
  error("Issue igniting Flamework: " + e as string);
}