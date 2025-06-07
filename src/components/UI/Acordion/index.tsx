"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import clsx from "clsx";
import { Plus } from "@/components/Icons/Plus";

type RefComponent<T extends React.ElementType> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<T>> &
  React.RefAttributes<React.ComponentRef<T>>>;

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem: RefComponent<typeof AccordionPrimitive.Item> = React.forwardRef(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={className} {...props} />
  )
);
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger: RefComponent<typeof AccordionPrimitive.Trigger> = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={clsx(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all",
          "[&[data-state=open]>svg]:rotate-180 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
        <Plus fillOpacity="1" className="transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent: RefComponent<typeof AccordionPrimitive.Content> = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={clsx(
        "overflow-hidden text-sm transition-all",
        "data-[state=closed]:animate-accordion-up",
        "data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = "AccordionContent";
