"use client";
import { useState } from "react";

export default function LandingPage() {

  const [qty, setQty] = useState(1);

  return (
    <main className="max-w-xl mx-auto px-4 pb-20 bg-[url('/bg-olive.png')] bg-cover">

      {/* صورة */}
      <img src="/flowers-pack.webp" className="w-full rounded-2xl mt-6 shadow-xl"/>

      {/* العنوان */}
      <h1 className="text-3xl font-black mt-4 text-right text-green-800">
        باقة الأزهار
      </h1>

      {/* النجوم */}
      <div className="flex justify-end mt-2 gap-2 items-center">
        <div className="text-yellow-400 text-3xl">★★★★★</div>
        <span className="text-gray-500 text-lg">0/5</span>
      </div>

      {/* الثمن */}
      <div className="mt-6 text-right space-y-2">

        <span className="line-through text-gray-400 text-lg block">
          670 د.م
        </span>

        <span className="text-5xl font-black text-green-700 block">
          550 د.م
        </span>

        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm inline-block">
          وفر 120 د.م
        </span>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm inline-block">
          متوفر في المخزون
        </span>

      </div>

      {/* الكمية */}
      <div className="mt-6 border rounded-xl flex justify-between items-center p-4 bg-white">
        <button onClick={() => setQty(qty + 1)}>+</button>
        <span className="font-bold text-lg">{qty}</span>
        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
      </div>

      {/* زر */}
      <button className="w-full bg-green-600 text-white py-4 rounded-xl mt-6 font-bold shadow-lg animate-[wiggle_0.8s_ease-in-out_infinite]">
        اطلب الآن ({550 * qty} د.م)
      </button>

      <style jsx>{`
        @keyframes wiggle {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
      `}</style>

      {/* 📝 وصف المنتج */}
      <div className="mt-10 text-right bg-white p-4 rounded-xl shadow">

        <h2 className="text-xl font-black text-green-700 mb-3">
          وصف المنتج
        </h2>

        <p className="text-gray-700 leading-8">
🌼 دلّل عائلتك مع "باقة الأزهار" المختارة بعناية، والتي تجمع بين أجود المنتجات الطبيعية لتمنحك مذاقًا أصيلًا وفوائد غذائية في باقة واحدة متكاملة.
        </p>

        <p className="font-bold mt-4 text-green-700">
📦 محتوى الباقة:
        </p>

        <p className="mt-2">🥄 <b>أملو باللوز</b> – 700غ</p>
        <p>🍯 <b>عسل الكالبتوس</b> – 1 كيلو</p>
        <p>🌼 <b>عسل الأزهار</b> – 1 كيلو</p>
        <p>🫒 <b>زيت أركان</b> – 250 مل</p>
        <p>🍎 <b>خل التفاح</b> – 250 مل (هدية)</p>

      </div>

      {/* 📦 منتجات الباقة */}
      <div className="mt-10">

        <h2 className="text-xl font-black text-green-700 text-right mb-4">
          منتجات الباقة (5 منتجات)
        </h2>

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
          <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl mb-3 shadow">

            <img src={p.img} className="w-20 h-20 rounded-lg object-cover"/>

            <div className="flex-1 text-right">
              <h3 className="font-bold text-lg">{p.name}</h3>
              <p className="text-gray-500">{p.desc}</p>
            </div>

            <a
              href={p.link}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              عرض
            </a>

          </div>
        ))}

      </div>

    </main>
  );
}
