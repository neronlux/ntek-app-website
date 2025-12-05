import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Breadcrumb Component
 *
 * A navigation component that indicates the current page's location within a navigational hierarchy.
 *
 * @param {React.ComponentPropsWithoutRef<"nav">} props - Props for the nav element.
 * @param {React.Ref<HTMLElement>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered breadcrumb nav.
 */
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

/**
 * BreadcrumbList Component
 *
 * The ordered list container for breadcrumb items.
 *
 * @param {React.ComponentPropsWithoutRef<"ol">} props - Props for the list.
 * @param {React.Ref<HTMLOListElement>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered list.
 */
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

/**
 * BreadcrumbItem Component
 *
 * An individual item in the breadcrumb list.
 *
 * @param {React.ComponentPropsWithoutRef<"li">} props - Props for the list item.
 * @param {React.Ref<HTMLLIElement>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered item.
 */
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

/**
 * BreadcrumbLink Component
 *
 * A link within a breadcrumb item.
 *
 * @param {React.ComponentPropsWithoutRef<"a"> & { asChild?: boolean }} props - Props for the link.
 * @param {React.Ref<HTMLAnchorElement>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered link.
 */
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

/**
 * BreadcrumbPage Component
 *
 * Represents the current page in the breadcrumb trail.
 *
 * @param {React.ComponentPropsWithoutRef<"span">} props - Props for the span.
 * @param {React.Ref<HTMLSpanElement>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered page indicator.
 */
const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

/**
 * BreadcrumbSeparator Component
 *
 * Visual separator between breadcrumb items.
 *
 * @param {React.ComponentProps<"li">} props - Props for the separator.
 * @returns {JSX.Element} The rendered separator.
 */
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

/**
 * BreadcrumbEllipsis Component
 *
 * Displays an ellipsis to indicate hidden breadcrumb items.
 *
 * @param {React.ComponentProps<"span">} props - Props for the span.
 * @returns {JSX.Element} The rendered ellipsis.
 */
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
