"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRive } from "@rive-app/react-canvas";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function BooZiytMascot() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const { RiveComponent } = useRive({
    src: "/rive/boo-ziyt-mascot.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  async function sendMessage() {
    const text = message.trim();

    if (!text || loading) return;

    setMessage("");

    setMessages((prev) => [
      ...prev,
      { role: "user", text },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "حدث خطأ");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "سمح ليا، وقع مشكل دابا. عاود حاول من بعد.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return createPortal(
    <>
      {open && (
        <div
          style={{
            position: "fixed",
            right: "15px",
            bottom: "125px",
            width: "320px",
            maxWidth: "calc(100vw - 30px)",
            height: "430px",
            background: "white",
            borderRadius: "18px",
            boxShadow: "0 5px 25px rgba(0,0,0,0.2)",
            zIndex: 999998,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid #eee",
          }}
        >
          <div
            style={{
              background: "black",
              color: "white",
              padding: "14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "700",
            }}
          >
            <span>مساعد Boo Ziyt 🤖</span>

            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: "12px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              background: "#fafafa",
            }}
          >
            {messages.length === 0 && (
              <div
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "12px",
                  fontSize: "13px",
                  alignSelf: "flex-start",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                }}
              >
                السلام عليكم 👋
                <br />
                كيفاش نقدر نعاونك؟
              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  background:
                    msg.role === "user" ? "black" : "white",
                  color:
                    msg.role === "user" ? "white" : "black",
                  padding: "9px 11px",
                  borderRadius: "12px",
                  fontSize: "13px",
                  alignSelf:
                    msg.role === "user"
                      ? "flex-end"
                      : "flex-start",
                  maxWidth: "85%",
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div
                style={{
                  background: "white",
                  padding: "9px 11px",
                  borderRadius: "12px",
                  fontSize: "13px",
                  alignSelf: "flex-start",
                }}
              >
                كنفكر... ⏳
              </div>
            )}
          </div>

          <div
            style={{
              padding: "10px",
              display: "flex",
              gap: "7px",
              borderTop: "1px solid #eee",
              background: "white",
            }}
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="كتب سؤالك..."
              style={{
                flex: 1,
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "9px",
                outline: "none",
                fontSize: "13px",
              }}
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              style={{
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "10px",
                padding: "0 13px",
                cursor: loading ? "default" : "pointer",
                opacity: loading ? 0.6 : 1,
              }}
            >
              إرسال
            </button>
          </div>
        </div>
      )}

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
            background: "black",
            color: "white",
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

        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="فتح مساعد Boo Ziyt"
          style={{
            width: "105px",
            height: "105px",
            padding: 0,
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <RiveComponent />
        </button>
      </div>
    </>,
    document.body
  );
}
