export type Patchable = {
	[key: string]: object;
};

export type PatchFn = (...args: unknown[]) => boolean | undefined;

export type FlowerPatch = {
	obj: Patchable;
	methodName: string;
	prefixes: PatchFn[];
	postfixes: PatchFn[];
	applied: boolean;
};
