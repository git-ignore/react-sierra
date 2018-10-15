// @flow

type TransitionShape = $ReadOnly<{ [size: string]: string }>;

export const transitions: TransitionShape = Object.freeze({
  sm: "0.25s cubic-bezier(.27,.01,.38,1.06)",
  md: "0.4s cubic-bezier(.27,.01,.38,1.06)"
});
