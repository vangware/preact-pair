# This repository's code was moved to [this monorepo](https://github.com/vangware/libraries/tree/main/packages/preact-pair).

<img id="logo" alt="Preact Pair by Vangware" src="./logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

🖇️ Util to help with the [paired hook pattern][article].

## Usage

### 📦 Node

Install `preact-pair` as a dependency:

```bash
pnpm add preact-pair
# or
npm install preact-pair
# or
yarn add preact-pair
```

Import it and use it:

```tsx
import { useState } from "preact";
import { pair } from "preact-pair";

const useCount = initialCount => {
	const [count, setCount] = useState(initialCount);

	return { onClick: () => setCount(count + 1), children: count };
};

const PairedCount = pair(useCount);

const Component = ({ array = [] }) => (
	<ul>
		{array.map(key => (
			<PairedCount key={key}>
				{usePairedCount => {
					const props = usePairedCount(key);

					return (
						<li>
							<button type="button" {...props} />
						</li>
					);
				}}
			</PairedCount>
		))}
	</ul>
);
```

### 🦕 Deno

Import `preact-pair` using the `npm:` prefix, and use it directly:

```tsx
import { useState } from "npm:preact";
import { pair } from "npm:preact-pair";

const useCount = initialCount => {
	const [count, setCount] = useState(initialCount);

	return { onClick: () => setCount(count + 1), children: count };
};

const PairedCount = pair(useCount);

const Component = ({ array = [] }) => (
	<ul>
		{array.map(key => (
			<PairedCount key={key}>
				{usePairedCount => {
					const props = usePairedCount(key);

					return (
						<li>
							<button type="button" {...props} />
						</li>
					);
				}}
			</PairedCount>
		))}
	</ul>
);
```

### 🌎 Browser

Import `preact-pair` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { h, useState } from "https://esm.sh/preact";
	import { pair } from "https://esm.sh/preact-pair";

	const useCount = initialCount => {
		const [count, setCount] = useState(initialCount);

		return { onClick: () => setCount(count + 1), children: count };
	};

	const PairedCount = pair(useCount);

	const Component = ({ array = [] }) => (
		<ul>
			{array.map(key =>
				h(PairedCount, { key }, usePairedCount => {
					const props = usePairedCount(key);

					return h("li", null, h("button", props));
				}),
			)}
		</ul>
	);
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[article]: https://luke.sh/articles/the-paired-hook-pattern
[changelog]: https://github.com/vangware/preact-pair/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/preact-pair.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/preact-pair
[coverage]: https://coveralls.io/github/vangware/preact-pair
[documentation]: https://preact-pair.vangware.com
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/preact-pair.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/preact-pair/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/preact-pair.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/preact-pair
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/preact-pair.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/preact-pair/issues
