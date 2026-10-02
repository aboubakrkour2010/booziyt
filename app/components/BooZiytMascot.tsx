"use client";

import { useRive } from "@rive-app/react-canvas";

export default function BooZiytMascot() {
  const { RiveComponent } = useRive({
    src: "/rive/boo-ziyt-mascot.riv",
    autoplay: true,
  });

  return (
    <div className="w-64 h-64">
      <RiveComponent />
    </div>
  );
}
