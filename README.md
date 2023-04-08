<img alt="Vangware's Preact Pair" src="./logo.svg" height="192" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

🖇️ Util to help with the [paired hook pattern][article].

## Installation

### Direct usage

For envs like [Deno][deno] or the browser:

```js
import { pair } from "https://esm.sh/preact-pair";
```

### Local installation

For Node:

```sh
npm i preact-pair
```

## Usage

```tsx
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

## Documentation

Documentation can be found [HERE][documentation]. It is auto-generated with
[typedoc][typedoc] based on the JSDocs and the types in the source. Shouldn't be
necessary to read this, code editors like [VSCode][vscode] integrate the
documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

## Test coverage

Test coverage can be found [HERE][coverage].

<!-- Reference -->

[article]: https://lukeshiru.dev/articles/the-paired-hook-pattern
[changelog]: https://github.com/vangware/preact-pair/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/preact-pair.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/preact-pair
[coverage]: https://coveralls.io/github/vangware/preact-pair
[deno]: https://deno.land/
[documentation]: https://preact-pair.vangware.com
[license-badge]:
	https://img.shields.io/npm/l/preact-pair.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/preact-pair/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/preact-pair.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/preact-pair
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/preact-pair.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/preact-pair/issues
[typedoc]: https://typedoc.org/
[vangware]: https://vangware.com
[vscode]: https://code.visualstudio.com/
