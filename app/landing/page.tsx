"use client";
import { useState } from "react";

export default function LandingPage() {

  const [qty, setQty] = useState(1);

  return (
    <main className="max-w-xl mx-auto px-4 pb-20">

      {/* صورة */}
      <img src="/flowers-pack.webp" className="w-full rounded-2xl mt-6 shadow"/>

      {/* العنوان */}
      <h1 className="text-3xl font-black mt-4 text-right">
        باقة الأزهار
      </h1>

      {/* النجوم */}
      <div className="flex justify-end mt-2 gap-2 items-center">
        <div className="text-yellow-400 text-2xl">★★★★★</div>
        <span className="text-gray-500">0/5</span>
      </div>

      {/* الثمن */}
      <div className="mt-4 text-right space-y-1">

        <span className="line-through text-gray-400 text-lg">
          670 د.م
        </span>

        <div className="flex justify-end items-center gap-3">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
            وفر 120 د.م
          </span>

          <span className="text-4xl font-black text-green-700">
            550 د.م
          </span>
        </div>

      </div>

      {/* المخزون */}
      <div className="mt-3 text-right">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          متوفر في المخزون
        </span>
      </div>

      {/* الكمية */}
      <div className="mt-6 border rounded-xl flex justify-between items-center p-4">
        <button onClick={() => setQty(qty + 1)}>+</button>
        <span className="font-bold text-lg">{qty}</span>
        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
      </div>

      {/* زر يتحرك يمين يسار */}
      <button className="w-full bg-green-600 text-white py-4 rounded-xl mt-6 font-bold animate-[wiggle_1s_ease-in-out_infinite]">
        اطلب الآن ({550 * qty} د.م)
      </button>

      {/* animation */}
      <style jsx>{`
        @keyframes wiggle {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }
      `}</style>

      {/* وصف */}
      <div className="mt-8 text-right leading-7 text-gray-700">

        <p>
🌼 دلّل عائلتك مع "باقة الأزهار" المختارة بعناية، والتي تجمع بين أجود المنتجات الطبيعية لتمنحك مذاقًا أصيلًا وفوائد غذائية في باقة واحدة متكاملة.
        </p>

        <p className="font-bold mt-4">📦 محتوى الباقة:</p>

        <p>🥄 700 غ أملو باللوز بزيت أركان وعسل الكالبتوس</p>
        <p>🍯 1 كيلو عسل الكالبتوس</p>
        <p>🌼 1 كيلو عسل الأزهار</p>
        <p>🫒 250 مل زيت أركان</p>
        <p>🍎 250 مل خل التفاح (هدية)</p>

      </div>

      {/* المحتويات بالتصميم */}
      <div className="mt-8 space-y-3">

        {[
          {
            name: "أملو باللوز",
            desc: "700 غ",
            img: "/amlou1.webp",
            link: "https://www.booziyt.com/product/amlou-almond"
          },
          {
            name: "عسل الكالبتوس",
            desc: "1 كيلو",
            img: "/honey6.webp",
            link: "https://www.booziyt.com/honey/eucalyptus-honey"
          },
          {
            name: "عسل الأزهار",
            desc: "1 كيلو",
            img: "/flowers-pack.webp",
            link: "https://www.booziyt.com/honey/flowers-honey"
          },
          {
            name: "زيت أركان",
            desc: "250 مل",
            img: "/oil1.png",
            link: "https://www.booziyt.com/oil"
          },
          {
            name: "خل التفاح",
            desc: "250 مل",
            img: "/vin.png",
            link: "https://www.booziyt.com/product/apple-vinegar"
          },
        ].map((p, i) => (
          <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">

            <img src={p.img} className="w-20 h-20 rounded-lg object-cover"/>

            <div className="flex-1 text-right">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-gray-500">{p.desc}</p>

              <a href={p.link} className="text-green-600 text-sm">
                عرض
              </a>
            </div>

          </div>
        ))}

      </div>

      {/* الحساب */}
      <div className="mt-8 bg-gray-50 p-4 rounded-xl text-right space-y-2">

        <div className="flex justify-between">
          <span>القيمة الأصلية:</span>
          <span>670 د.م</span>
        </div>

        <div className="flex justify-between">
          <span>التوصيل:</span>
          <span>35 د.م</span>
        </div>

        <div className="flex justify-between">
          <span>المجموع:</span>
          <span>705 د.م</span>
        </div>

        <div className="flex justify-between font-bold text-green-700">
          <span>سعر الباقة:</span>
          <span>550 د.م</span>
        </div>

        <div className="flex justify-between text-red-600">
          <span>وفرت:</span>
          <span>155 د.م</span>
        </div>

      </div>

    </main>
  );
}
