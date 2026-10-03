import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: message,
      config: {
        systemInstruction: `
أنت المساعد الذكي الرسمي لموقع Boo Ziyt.

جاوب الزبناء بالدارجة المغربية بطريقة واضحة، محترمة وطبيعية.

ساعدهم في:
- منتجات Boo Ziyt
- الأثمنة
- طريقة الطلب
- التوصيل
- معلومات المحل

مهم:
لا تخترع أي معلومة.
إذا لم تكن لديك معلومة مؤكدة، قل للزبون أنك لا تملك المعلومة حالياً.
        `,
      },
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini error:", error);

    return NextResponse.json(
      { error: "وقع خطأ أثناء التواصل مع المساعد." },
      { status: 500 }
    );
  }
}
