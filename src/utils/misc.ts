/* eslint-disable @typescript-eslint/no-explicit-any */
export const isEnvBrowser = (): boolean => !(window as any).invokeNative;
export const noop = () => {};
