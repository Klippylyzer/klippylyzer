// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<Callback extends (...args: any) => any>(
  callback: Callback,
  delay: number
): (...a: Parameters<Callback>) => Promise<ReturnType<Callback>> {
  let timeout: ReturnType<typeof setTimeout>;
  let promise: Promise<ReturnType<Callback>>;
  let resolve: undefined | ((v: ReturnType<Callback>) => void);

  return (...args) => {
    clearTimeout(timeout);
    if (!promise) {
      promise = new Promise((r) => {
        resolve = r;
      });
    }

    timeout = setTimeout(() => {
      resolve?.(callback(...args));
      resolve = undefined;
    }, delay);

    return promise;
  };
}
