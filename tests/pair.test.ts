import type { Tests } from "@vangware/test";
import { h } from "preact";
// @ts-expect-error "preact-render-to-string" doesn't work well with the new TS types
import preactRenderToString from "preact-render-to-string";
import { useState } from "preact/hooks";
import { pair } from "../src/pair.js";
import type { PairedRenderFunction } from "../src/PairedRenderFunction.js";

// TODO: Remove this once the types are fixed in Preact's side.
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const renderToString = preactRenderToString as (
	...stuff: ReadonlyArray<unknown>
) => string;

const children = (usePairedState: typeof useState) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [count, setCount] = usePairedState(0);

	return h(
		"button",
		{ onClick: () => setCount(count + 1), type: "button" },
		count,
	);
};

const key = "TEST";

const PairedState = pair(useState);

export default [
	{
		given: "a paired hook with key",
		must: "return component wrapping hook and with key",
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		received: renderToString(h(PairedState, { children, key })),
		wanted: renderToString(
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			h(
				({
					children: render,
				}: {
					readonly children: PairedRenderFunction<typeof useState>;
				}) => render(useState),
				{ children, key },
			),
		),
	},
	{
		given: "a paired hook without key",
		must: "return component wrapping hook and without key",
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		received: renderToString(h(PairedState, { children })),
		wanted: renderToString(
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			h(
				({
					children: render,
				}: {
					readonly children: PairedRenderFunction<typeof useState>;
				}) => render(useState),
				{ children },
			),
		),
	},
] as Tests;
