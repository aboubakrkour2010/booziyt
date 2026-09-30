"use client";

import React from "react";
import { useRive } from "@rive-app/react-canvas";

const BooZiytMascot = () => {
  const { RiveComponent } = useRive({
    src: "/rive/boo-ziyt-mascot.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <div className="fixed bottom-4 right-4 w-32 h-32 z-50 pointer-events-auto cursor-pointer">
      <RiveComponent />
    </div>
  );
};

export default BooZiytMascot;
