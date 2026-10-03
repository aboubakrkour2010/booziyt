"use client";

import { useRive } from "@rive-app/react-canvas";

export default function BooZiytMascot() {
  const { RiveComponent } = useRive({
    src: "/rive/boo-ziyt-mascot.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-center">
      
      <div className="mb-1 rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-md whitespace-nowrap">
        هل يمكنني مساعدتك؟ 👋
      </div>

      <div className="relative h-24 w-24 overflow-visible">
        <RiveComponent className="h-full w-full" />
      </div>

    </div>
  );
}
