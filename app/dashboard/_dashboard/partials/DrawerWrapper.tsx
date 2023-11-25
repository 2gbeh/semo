"use client";
import React from "react";
import {
  Drawer as ChakraUIDrawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
//
import { DrawerContext, IDrawerContext } from "../useDrawerContext";

const DrawerWrapper = ({ children }: { children: React.ReactNode }) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const { isOpen, onClose } = React.useContext(DrawerContext) as IDrawerContext;
  //
  return (
    <ChakraUIDrawer
      placement="left"
      onClose={onClose}
      isOpen={isOpen}
      initialFocusRef={inputRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <input type="hidden" ref={inputRef} />
        {children}
      </DrawerContent>
    </ChakraUIDrawer>
  );
};

export default React.memo(DrawerWrapper);
