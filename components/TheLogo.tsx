"use client";
import React, { Fragment, useState, useEffect } from "react";
import { useTimeoutFn } from "react-use";
import { Transition } from "@headlessui/react";

const TheLogo = ({
  variant = "white",
  animated = true,
  width = 48,
}: {
  variant?: "white" | "black";
  animated?: boolean;
  width?: number;
}) => {
  const [isShowing, setIsShowing] = useState(true);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  useEffect(() => {
    if (animated) {
      setIsShowing(false);
      resetIsShowing();
    }
  }, []);
  //
  const theLogo = (
    <img
      src={variant === "white" ? "/logo-white.png" : "/logo.png"}
      alt=""
      style={{ width }}
    />
  );
  //
  return animated ? (
    <Transition
      as={Fragment}
      show={isShowing}
      enter="transform  transition duration-[400ms]"
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      {theLogo}
    </Transition>
  ) : (
    theLogo
  );
};

export default React.memo(TheLogo);
