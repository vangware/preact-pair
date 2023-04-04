import type { Function, Unary } from "@vangware/types";
import type { VNode } from "preact";

/**
 * Function that receives the paired hook and should return a `VNode`.
 *
 * @category Internal
 */
export type PairedRenderFunction<Hook extends Function> = Unary<Hook, VNode>;
