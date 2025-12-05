"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

/**
 * Drawer Component
 *
 * A drawer component that slides up from the bottom of the screen.
 * Built on top of `vaul`.
 *
 * @param {React.ComponentProps<typeof DrawerPrimitive.Root>} props - Props for the drawer root.
 * @returns {JSX.Element} The rendered drawer.
 */
const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

/**
 * DrawerTrigger Component
 *
 * The button that opens the drawer.
 */
const DrawerTrigger = DrawerPrimitive.Trigger

/**
 * DrawerPortal Component
 *
 * Portals the drawer content into the body.
 */
const DrawerPortal = DrawerPrimitive.Portal

/**
 * DrawerClose Component
 *
 * The button that closes the drawer.
 */
const DrawerClose = DrawerPrimitive.Close

/**
 * DrawerOverlay Component
 *
 * The backdrop for the drawer.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>} props - Props for the overlay.
 * @param {React.Ref<React.ElementRef<typeof DrawerPrimitive.Overlay>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered overlay.
 */
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

/**
 * DrawerContent Component
 *
 * The main content container of the drawer.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>} props - Props for the content.
 * @param {React.Ref<React.ElementRef<typeof DrawerPrimitive.Content>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered content.
 */
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

/**
 * DrawerHeader Component
 *
 * Container for the drawer title and description.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes.
 * @returns {JSX.Element} The rendered header.
 */
const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

/**
 * DrawerFooter Component
 *
 * Container for action buttons at the bottom of the drawer.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Standard HTML div attributes.
 * @returns {JSX.Element} The rendered footer.
 */
const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

/**
 * DrawerTitle Component
 *
 * The title of the drawer.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>} props - Props for the title.
 * @param {React.Ref<React.ElementRef<typeof DrawerPrimitive.Title>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered title.
 */
const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

/**
 * DrawerDescription Component
 *
 * The description/message of the drawer.
 *
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>} props - Props for the description.
 * @param {React.Ref<React.ElementRef<typeof DrawerPrimitive.Description>>} ref - Forwarded ref.
 * @returns {JSX.Element} The rendered description.
 */
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
