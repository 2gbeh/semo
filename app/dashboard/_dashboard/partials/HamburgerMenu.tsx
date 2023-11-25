"use client";
import React from "react";
import X from "@/components/SketchBox";
import { IDrawerContext, DrawerContext } from "../useDrawerContext";

const HamburgerMenu = () => {
  const { onOpen } = React.useContext(DrawerContext) as IDrawerContext;
  //
  return (
    <li className="sm:hidden block mr-4 cursor-pointer" onClick={onOpen}>
      <X as={[1, 24, "Drawer"]} />
    </li>
  );
};

export default React.memo(HamburgerMenu);
