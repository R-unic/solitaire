import Vide from "@rbxts/vide";

/**
 * Returns a function that can be used as a story. This function will
 * mount the given component to the target instance and unmount it when the
 * story is unmounted.
 * @param TestComponent The component to mount.
 * @returns A story.
 */
export function story(TestComponent: () => Vide.Node) {
  return (target: Instance) => Vide.mount(TestComponent, target);
}