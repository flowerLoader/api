import { FlowerAPI } from "./FlowerAPI"
import { LogSource } from "./logSource"

export type FlowerMeta =
  {
    /**
     * Fill this out and make it unique.
     * Try to follow a reverse COM format or team.product schema here
     */
    GUID: string

    /**
     * You can put whatever you want here but keep in mind other plugins may want
     * to figure out if they know what features you offer based on your version so
     * keep it simple to understand. SemVer x.x.x major.minor.release is easy to
     * understand and parse
     */
    VERSION: string

    /**
     * This can be whatever you want.
     */
    NAME: string

    /**
     * Flower will respect this value and refuse to load plugins that are disabled
     */
    ENABLED: boolean
  }

export interface IFlowerPluginFactory
{
  /**
   * Flower will pass you a flowerAPI and LogSource as your plugin is created
   * This is the earliest your plugin exists and because JS is async
   * there is no way to access other plugins metadata/etc here.
   * Flower and the logger are loaded. Other plugins may still be loading
   */
  new(flower: FlowerAPI, logger: LogSource): IFlowerPlugin
}

export interface IFlowerPlugin
{
  /**
   * Flower will call this as a post-load event when it has finished loading
   * or disposing of all plugins. All plugin states are ready here and you
   * can depend on all other plugins being fully loaded at this point
   */
  Awake: () => void
}

export type FlowerModule =
  {
    META: FlowerMeta;
    default: IFlowerPluginFactory
  }

export abstract class BasePlugin<T> implements IFlowerPlugin
{
  flower: FlowerAPI;
  logger: LogSource;
  gameData: T;

  constructor(flower: FlowerAPI, logger: LogSource)
  {
    this.flower = flower;
    this.logger = logger;
    this.gameData = flower.GetGameMain();
  }

  abstract Awake(): void;
}