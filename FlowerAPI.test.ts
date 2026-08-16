import { expect, test } from "bun:test";
import { isModule } from "./FlowerAPI";

test("isModule accepts a well-formed module shape", () => {
	class Plugin {}
	expect(
		isModule({
			META: { GUID: "g", VERSION: "1.0.0", NAME: "n", ENABLED: true },
			default: Plugin,
		}),
	).toBe(true);
});

test("isModule rejects an object missing META", () => {
	class Plugin {}
	expect(isModule({ default: Plugin })).toBe(false);
});

test("isModule rejects an object missing default", () => {
	expect(
		isModule({
			META: { GUID: "g", VERSION: "1.0.0", NAME: "n", ENABLED: true },
		}),
	).toBe(false);
});
