"use client";

import { useRive } from "@rive-app/react-canvas";

export default function BooZiytMascot() {
  const { RiveComponent } = useRive({
    src: "/rive/boo-ziyt-mascot.riv",
    autoplay: true,
  });

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <div className="mb-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg">
        هل يمكنني مساعدتك؟ 👋
      </div>

      <div className="h-80 w-80">
        <RiveComponent />
      </div>
    </div>
  );
}
