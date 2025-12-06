import { useLayoutEffect } from "react";

/**
 * `useLayoutEffect` that only runs in the browser.
 * On the server (SSR), this hook is a no-op to avoid warnings.
 * @type {typeof useLayoutEffect | (() => void)}
 */
const useBrowserLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

export default useBrowserLayoutEffect;
