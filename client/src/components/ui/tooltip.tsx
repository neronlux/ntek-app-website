"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

/**
 * TooltipProvider Component
 *
 * Provides global configuration for tooltips.
 */
const TooltipProvider = TooltipPrimitive.Provider

/**
 * Tooltip Component
 *
 * A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * Wraps Radix UI's Tooltip Root.
 */
const Tooltip = TooltipPrimitive.Root

/**
 * TooltipTrigger Component
 *
 * The element that triggers the tooltip.
 */
const TooltipTrigger = TooltipPrimitive.Trigger

/**
 * TooltipContent Component
 *
 * The content to be displayed within the tooltip.
 *
 * @param {number} [sideOffset=4] - Distance from the trigger.
 * @param {React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>} props - Props for the content.
 * @param {React.ElementRef<typeof TooltipPrimitive.Content>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered tooltip content.
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
