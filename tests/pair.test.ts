import type { Tests } from "@vangware/test";
import { h } from "preact";
import { renderToString } from "preact-render-to-string";
import { useState } from "preact/hooks";
import type { PairedRenderFunction } from "../src/PairedRenderFunction.js";
import { pair } from "../src/pair.js";

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
		received: () => renderToString(h(PairedState, { children, key })),
		wanted: () =>
			renderToString(
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				h(
					({
						children: render,
					}: {
						readonly children: PairedRenderFunction<
							typeof useState
						>;
					}) => render(useState),
					{ children, key },
				),
			),
	},
	{
		given: "a paired hook without key",
		must: "return component wrapping hook and without key",
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		received: () => renderToString(h(PairedState, { children })),
		wanted: () =>
			renderToString(
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				h(
					({
						children: render,
					}: {
						readonly children: PairedRenderFunction<
							typeof useState
						>;
					}) => render(useState),
					{ children },
				),
			),
	},
] satisfies Tests<string>;
