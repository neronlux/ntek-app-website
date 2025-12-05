"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

/**
 * Collapsible Component
 *
 * An interactive component which expands/collapses a panel.
 * Wraps Radix UI's Collapsible Root.
 */
const Collapsible = CollapsiblePrimitive.Root

/**
 * CollapsibleTrigger Component
 *
 * The button that toggles the collapsible panel.
 */
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

/**
 * CollapsibleContent Component
 *
 * The content that is expanded/collapsed.
 */
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
