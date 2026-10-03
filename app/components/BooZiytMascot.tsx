"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRive } from "@rive-app/react-canvas";

export default function BooZiytMascot() {
  const [mounted, setMounted] = useState(false);

  const { RiveComponent } = useRive({
    src: "/rive/boo-ziyt-mascot.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        right: "8px",
        bottom: "8px",
        width: "105px",
        zIndex: 999999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
  style={{
    background: "white",
    padding: "6px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
    whiteSpace: "nowrap",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    marginBottom: "-2px",
    position: "relative",
    left: "-15px",
  }}
>
  هل يمكنني مساعدتك؟ 👋
</div>

      <div style={{ width: "105px", height: "105px" }}>
        <RiveComponent />
      </div>
    </div>,
    document.body
  );
}
