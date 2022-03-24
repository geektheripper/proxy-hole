# Proxy Hole

A library to help you block some features in your code.

## Usage

`npm i proxy-hole`

`yarn add proxy-hole`

```ts
import { pretend, proxy } from ".";

console.log(proxy.any.property.anyfunc().anyarray[42]);

pretend(JSON).stringify({ answer: 42 }, null, 2);
```


## Example

```ts
import _log4js from "log4js";
import { pretend, proxy } from ".";

const log4js = process.env.MODE === 'cli' ? _log4js : pretend(_log4js);

log4js.configure({
  appenders: { stdout: { type: "stdout" } },
  categories: { default: { appenders: ["stdout"], level: "info" } },
});

export const logger = log4js.getLogger();
```

## Maintenance

The code for this project is extremely simple, so it may probably work even if it has not been maintained for many years.

```ts
// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
export const proxy: any = new Proxy(() => {}, {
  get: () => proxy,
  apply: () => proxy,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const pretend = <T>(p?: T) => proxy as T;
```
