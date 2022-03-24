// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
export const proxy: any = new Proxy(() => {}, {
  get: () => proxy,
  apply: () => proxy,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const pretend = <T>(p?: T) => proxy as T;
