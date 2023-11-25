"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import DrawerContextProvider from "./_dashboard/useDrawerContext";

export default function DashboardProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <DrawerContextProvider>{children}</DrawerContextProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
