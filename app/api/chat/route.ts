import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { BOO_ZIYT_INFO } from "../../../lib/booziyt-info";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

function normalize(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[؟?!.,،]/g, "")
    .replace(/\s+/g, " ");
}

const FAST_REPLIES: Record<string, string> = {
  "سلام": "وعليكم السلام ورحمة الله وبركاته 👋 كيفاش نقدر نعاونك؟",
  "السلام عليكم":
    "وعليكم السلام ورحمة الله وبركاته 👋 كيفاش نقدر نعاونك؟",
  "سلام عليكم":
    "وعليكم السلام ورحمة الله وبركاته 👋 كيفاش نقدر نعاونك؟",
  "salam": "وعليكم السلام ورحمة الله وبركاته 👋 كيفاش نقدر نعاونك؟",
  "salam 3likom":
    "وعليكم السلام ورحمة الله وبركاته 👋 كيفاش نقدر نعاونك؟",
  "شكرا": "العفو 🙏 مرحبا بيك في أي وقت.",
  "شكرا بزاف": "العفو 🙏 مرحبا بيك.",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const messages = Array.isArray(body.messages)
      ? body.messages
      : [];

    if (messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    const cleanMessages: ChatMessage[] = messages
      .filter(
        (msg: unknown): msg is ChatMessage =>
          typeof msg === "object" &&
          msg !== null &&
          "role" in msg &&
          "text" in msg &&
          typeof (msg as ChatMessage).text === "string" &&
          ((msg as ChatMessage).role === "user" ||
            (msg as ChatMessage).role === "assistant")
      )
      .slice(-20);

    if (cleanMessages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages" },
        { status: 400 }
      );
    }

    const lastMessage =
      cleanMessages[cleanMessages.length - 1];

    const normalizedMessage = normalize(lastMessage.text);

    const fastReply = FAST_REPLIES[normalizedMessage];

    if (fastReply) {
      return NextResponse.json({
        reply: fastReply,
      });
    }

    const contents = cleanMessages.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [
        {
          text: msg.text,
        },
      ],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction: BOO_ZIYT_INFO,
        temperature: 0.3,
        maxOutputTokens: 300,
      },
    });

    const reply =
      response.text?.trim() ||
      "سمح ليا، ما قدرتش نوجد ليك جواب دابا. عاود حاول من بعد.";

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error("Gemini error:", error);

    return NextResponse.json(
      {
        error: "وقع خطأ أثناء التواصل مع المساعد.",
      },
      { status: 500 }
    );
  }
}
