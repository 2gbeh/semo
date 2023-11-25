// import Rx from "@/components/Repeat";
import React from "react";

const Repeat = ({ as, n = 2 }: { as: React.ReactNode; n?: number }) => {
  return [...Array(n)].map((_, i) => (
    <React.Fragment key={i}>{as}</React.Fragment>
  ));
};

export default Repeat;
