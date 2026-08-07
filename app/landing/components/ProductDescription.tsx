"use client";

import { useState } from "react";

export default function ProductDescription() {
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-4 mt-10">

      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white border rounded-2xl p-5 flex items-center justify-between shadow-sm"
      >

        <h2 className="text-2xl font-black text-gray-900">
          وصف الباقة
        </h2>

        <span
          className={`text-3xl transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>

      </button>

      {open && (

        <div className="bg-white rounded-2xl shadow-sm p-7 mt-4 leading-10 text-lg text-gray-700 whitespace-pre-line">

{`🌼 دلّل عائلتك مع "باقة الأزهار" المختارة بعناية، والتي تجمع بين أجود المنتجات الطبيعية لتمنحك مذاقًا أصيلًا وفوائد غذائية في باقة واحدة متكاملة.

📦 محتوى الباقة:

🥄 700 غرام أملو باللوز بزيت أركان وعسل الكالبتوس
مزيج فاخر بقوام كريمي ومذاق غني، مثالي للفطور أو كوجبة تمدك بالطاقة.

🍯 1 كيلو عسل الكالبتوس
عسل طبيعي عالي الجودة، بطعم مميز ومناسب للاستعمال اليومي.

🌼 1 كيلو عسل الأزهار
عسل طبيعي متعدد الأزهار، غني بالنكهة والقيمة الغذائية، يناسب جميع أفراد الأسرة.

🫒 250 مل زيت أركان للأكل
زيت أركان نقي 100%، مثالي للسلطات، الأطباق، أو مع الخبز.

🎁 هدية مجانية:
🍎 250 مل خل التفاح الطبيعي.

💰 السعر: 550 درهم فقط، مع شحن مجاني إلى جميع مدن المغرب. 🚚

🎁 باقة متكاملة تجمع بين الجودة، المذاق الأصيل، والمنتجات الطبيعية، لتكون خيارًا مثاليًا لك ولعائلتك.`}

        </div>

      )}

    </section>
  );
}