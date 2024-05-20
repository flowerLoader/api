import { PatchFn, Patchable } from "./FlowerPatch"
import { FlowerModule } from "./FlowerPlugin"

export type FlowerAPI<T> = {
  /**
   * Register a patch for a method on an object with a prefix or postfix
   * @param obj
   * @param methodName - The name of the method to patch
   * @param patch      - The function to run as a detour
   * @param isPrefix   - If true, the patch will run before the original method
   * @returns {boolean}
   */
  RegisterPatch: (obj: Patchable, methodName: string, patch: PatchFn, isPrefix: boolean) => boolean

  // Returns the main game object
  GetGameMain: () => T
}

export function isModule(thing: any): thing is FlowerModule
{
  const temp = thing as FlowerModule;
  return (temp.META !== undefined) && (temp.default !== undefined) && (temp.default.constructor !== undefined)
}
