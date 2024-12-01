"use client";
import { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

interface ReactScrollParallaxProp {
  children: ReactNode;
}

export function ReactScrollParallax({ children }: ReactScrollParallaxProp) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
