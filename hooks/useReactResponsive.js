// import useReactResponsive, { ReactResponsive } from "hooks/useReactResponsive";
import { useState, useMemo, useCallback } from "hooks/common";
import { useMediaQuery } from "react-responsive";

export * as ReactResponsive from "./ReactResponsive";

export function useMobile(maxWidth = 767) {
  const isMobile = useMediaQuery({ maxWidth });
  const ifMobile = (yes, no) => (isMobile ? yes : no);
  return {
    isMobile,
    ifMobile,
  };
}
export default useMobile;

export function useNotMobile(minWidth = 768) {
  const isNotMobile = useMediaQuery({ minWidth });
  const ifNotMobile = (yes, no) => (isNotMobile ? yes : no);
  return {
    isNotMobile,
    ifNotMobile,
  };
}

export function useTablet(minWidth = 768, maxWidth = 991) {
  const isTablet = useMediaQuery({ minWidth, maxWidth });
  const ifTablet = (yes, no) => (isTablet ? yes : no);
  return {
    isTablet,
    ifTablet,
  };
}

export function useDesktop(minWidth = 992) {
  const isDesktop = useMediaQuery({ minWidth });
  const ifDesktop = (yes, no) => (isDesktop ? yes : no);
  return {
    isDesktop,
    ifDesktop,
  };
}
