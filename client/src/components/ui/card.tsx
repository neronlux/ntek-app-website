import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Card Component
 *
 * A container component for grouping related content.
 * Styled with a border, background, and shadow.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref to the div element.
 * @returns {JSX.Element} The rendered card container.
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card"

/**
 * CardHeader Component
 *
 * Container for the card's header section.
 * Usually contains the CardTitle and CardDescription.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered header.
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader"

/**
 * CardTitle Component
 *
 * Displays the title of the card.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered title.
 */
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

/**
 * CardDescription Component
 *
 * Displays a description or subtitle for the card.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered description.
 */
const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription"

/**
 * CardContent Component
 *
 * Container for the main content of the card.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered content area.
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

/**
 * CardFooter Component
 *
 * Container for the card's footer section.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered footer.
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}
