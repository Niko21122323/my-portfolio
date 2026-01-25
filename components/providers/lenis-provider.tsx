"use client";

import ReactLenis from "lenis/react";
import { FC, useRef } from "react";

type LenisProps = {
  children: React.ReactNode;
};

const Lenis: FC<LenisProps> = ({ children }) => {
  const lenisRef = useRef(null);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.05, duration: 3, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
};

export default Lenis;
