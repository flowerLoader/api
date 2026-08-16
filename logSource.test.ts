import { expect, test } from "bun:test";
import { LogSource } from "./logSource";

test("constructor requires a writer", () => {
	expect(() => new LogSource("id", undefined as never, () => {})).toThrow();
});

test("constructor requires a debugWriter", () => {
	expect(() => new LogSource("id", () => {}, undefined as never)).toThrow();
});

test("write delegates to the writer with the logID", () => {
	const calls: Array<[string, string]> = [];
	const source = new LogSource(
		"myID",
		(title, message) => {
			calls.push([title, message]);
		},
		() => {},
	);
	source.write("hello");
	expect(calls).toEqual([["myID", "hello"]]);
});

test("writeDebug delegates to the debugWriter with the logID", () => {
	const calls: Array<[string, string]> = [];
	const source = new LogSource(
		"myID",
		() => {},
		(title, message) => {
			calls.push([title, message]);
		},
	);
	source.writeDebug("debugging");
	expect(calls).toEqual([["myID", "debugging"]]);
});
