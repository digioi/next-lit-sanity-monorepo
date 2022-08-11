
// export { CounterButton } from "./CounterButton"

// SSR may be resolved soon and it can be ssr'd
// https://github.com/lit/lit/issues/2524
import lazy from "next/dynamic"
export const CounterButton = lazy(() => import("./CounterButton"), {
  ssr: false,
});