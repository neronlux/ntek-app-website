"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

/**
 * HoverCard Component
 *
 * For sighted users to preview content available behind a link.
 * Wraps Radix UI's HoverCard Root.
 */
const HoverCard = HoverCardPrimitive.Root

/**
 * HoverCardTrigger Component
 *
 * The link that triggers the hover card.
 */
const HoverCardTrigger = HoverCardPrimitive.Trigger

/**
 * HoverCardContent Component
 *
 * The content to be displayed when hovering.
 *
 * @param {string} [align="center"] - Alignment of the card relative to the trigger.
 * @param {number} [sideOffset=4] - Distance from the trigger.
 * @returns {JSX.Element} The rendered content.
 */
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-hover-card-content-transform-origin]",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
