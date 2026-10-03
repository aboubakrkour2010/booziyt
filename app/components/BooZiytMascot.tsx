"use client";

import { useRive } from "@rive-app/react-canvas";

export default function BooZiytMascot() {
  const { RiveComponent } = useRive({
    src: "/rive/boo-ziyt-mascot.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <div className="fixed bottom-3 right-[-18px] z-[9999] flex flex-col items-end">
      <div className="mb-0 mr-1 rounded-xl bg-white px-2 py-1 text-xs font-semibold text-gray-800 shadow-md whitespace-nowrap">
        هل يمكنني مساعدتك؟ 👋
      </div>

      <div className="h-20 w-20">
        <RiveComponent className="h-full w-full" />
      </div>
    </div>
  );
}
