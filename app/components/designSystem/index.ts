
// export { CounterButton } from "./CounterButton"
// SSR may be resolved soon and it can be ssr'd
// https://github.com/lit/lit/issues/2524
import lazy from "next/dynamic"

// Using this will work great but no SSR :(
export const CounterButton = lazy(() => import("./CounterButton.client"), { ssr: false });
// Below breaks typing, but will render the text as stated on the request.
// export const CounterButton = lazy(() => import("./CounterButton")
//   .then((module) => (typeof window === 'undefined' ? module.default.server() : module.default.client())),
//   { ssr: true });