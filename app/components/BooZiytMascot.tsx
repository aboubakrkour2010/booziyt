"use client";

import { useRive } from "@rive-app/react-canvas";

export default function BooZiytMascot() {
  const { RiveComponent } = useRive({
    src: "/rive/boo-ziyt-mascot.riv",
    autoplay: true,
  });

  return (
    <div className="fixed bottom-3 right-3 z-[9999] flex flex-col items-end">
      <div className="mb-[-2px] mr-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg">
        هل يمكنني مساعدتك؟ 👋
      </div>

      <div className="h-72 w-72">
        <RiveComponent />
      </div>
    </div>
  );
}
