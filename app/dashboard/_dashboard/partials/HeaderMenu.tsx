"use client";
import React from "react";
import Link from "next/link";
import X from "@/components/SketchBox";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

const HeaderMenu = () => {
  return (
    <section className="flex items-center gap-3">
      {/* NOTIFICATIONS */}
      <BellIcon w={7} h={7} color="#a0aec0" />

      {/* ACCOUNT */}
      <Avatar size="xs">
        <AvatarBadge
          bg={window?.navigator?.onLine ? "#4caf50" : "#f44336"}
          boxSize="1.25em"
        />
      </Avatar>
    </section>
  );
};

export default React.memo(HeaderMenu);
