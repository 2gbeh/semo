"use client";
import React from "react";
//
import { useDisclosure } from "@chakra-ui/react";

export interface IDrawerContext {
  isOpen: boolean;
  onOpen: (event: React.MouseEvent) => void;
  onClose: () => void;
}

export const DrawerContext = React.createContext<IDrawerContext | null>(null);

const DrawerContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //
  return (
    <DrawerContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
