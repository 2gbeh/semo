"use client";
import React from "react";
import { Stat as ChakraUIStat, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import { AtSignIcon, ChatIcon, ViewIcon, AttachmentIcon, StarIcon } from "@chakra-ui/icons";

const iconProps = {
  w: 8,
  h: 8,
  color: "#a0aec0",
};

const ICON = {
  AtSignIco: <AtSignIcon {...iconProps} />,
  AttachmentIcon: <AttachmentIcon {...iconProps} />,
  ChatIco: <ChatIcon {...iconProps} />,
  StarIcon: <StarIcon {...iconProps} />,
  ViewIcon: <ViewIcon {...iconProps} />,
};

const Stat = ({
  icon = "AtSignIco",
  value,
  label,
  arrow,
}: {
  label: string;
  value: string;
  icon?: keyof typeof ICON;
  arrow?: "increase" | "decrease";
}) => {
  return (
    <ChakraUIStat className="bg-white px-5 py-3 rounded-lg shadow ">
      <div className="flex items-center gap-3">
        <div className="bg-canvas border p-2.5 rounded-full hidden sm:block">
          {ICON[icon]}
        </div>
        <div className="">
          <StatNumber>{value}</StatNumber>
          <StatHelpText>
            {arrow && <StatArrow type={arrow} />}
            {label}
          </StatHelpText>
        </div>
      </div>
    </ChakraUIStat>
  );
};

export default React.memo(Stat);
