"use client";
import { useState } from "react";

export default function LandingPage() {

  const [qty, setQty] = useState(1);
  const [openDesc, setOpenDesc] = useState(true);

  return (
    <main className="max-w-xl mx-auto px-4">

      {/* صورة */}
      <img src="/flowers-pack.webp" className="w-full rounded-2xl mt-6 shadow-xl"/>

      {/* العنوان */}
      <h1 className="text-3xl font-black mt-4 text-right">
        باقة الأزهار
      </h1>

      {/* التقييم */}
      <div className="flex items-center gap-2 mt-2 justify-end">
        <span className="text-gray-500 text-lg">0/5</span>
        <div className="text-yellow-400 text-2xl">
          ⭐⭐⭐⭐⭐
        </div>
      </div>

      {/* الثمن */}
      <div className="mt-4 text-right">

        <span className="line-through text-gray-400 text-xl block">
          670 د.م
        </span>

        <span className="text-4xl font-black text-green-700">
          550 د.م
        </span>

        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm inline-block mt-2">
          وفر 120 د.م
        </span>
      </div>

      {/* المخزون */}
      <div className="mt-3 text-right">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          متوفر في المخزون
        </span>
      </div>

      {/* الكمية */}
      <div className="mt-5 border rounded-xl flex justify-between items-center p-3">
        <button onClick={() => setQty(qty + 1)}>+</button>
        <span className="text-lg font-bold">{qty}</span>
        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
      </div>

      {/* زر متحرك */}
      <button className="w-full bg-green-600 text-white py-4 rounded-xl mt-4 font-bold animate-bounce">
        اطلب الآن ({550 * qty} د.م)
      </button>

      {/* وصف */}
      <div className="mt-6 border-t pt-4 text-right">

        <button onClick={() => setOpenDesc(!openDesc)} className="font-bold w-full">
          وصف المنتج
        </button>

        {openDesc && (
          <div className="mt-3 text-gray-700 leading-7">

🌼 دلّل عائلتك مع "باقة الأزهار" المختارة بعناية، والتي تجمع بين أجود المنتجات الطبيعية لتمنحك مذاقًا أصيلًا وفوائد غذائية في باقة واحدة متكاملة.

📦 محتوى الباقة:

🥄 700 غرام أملو باللوز بزيت أركان وعسل الكالبتوس  
🍯 1 كيلو عسل الكالبتوس  
🌼 1 كيلو عسل الأزهار  
🫒 250 مل زيت أركان للأكل  

🎁 هدية مجانية:  
🍎 250 مل خل التفاح الطبيعي  

💰 السعر: 550 درهم فقط، مع شحن مجاني 🚚

🎁 باقة متكاملة تجمع بين الجودة والمذاق الأصيل.

          </div>
        )}
      </div>

      {/* المحتويات بالصور */}
      <div className="mt-6">

        <h2 className="font-black text-right mb-4">
          محتويات الباقة (5 منتجات)
        </h2>

        {[
          { name: "أملو باللوز", img: "/amlou1.webp", price: 160 },
          { name: "عسل الكالبتوس", img: "/honey6.webp", price: 200 },
          { name: "عسل الأزهار", img: "/flowers-pack.webp", price: 120 },
          { name: "زيت أركان", img: "/oil1.png", price: 150 },
          { name: "خل التفاح", img: "/vin.png", price: 40 },
        ].map((p, i) => (
          <div key={i} className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl mb-3">

            <img src={p.img} className="w-20 h-20 object-cover rounded-lg"/>

            <div className="flex-1 text-right">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-green-700">{p.price} د.م</p>
            </div>

          </div>
        ))}
      </div>

      {/* الحساب */}
      <div className="mt-6 bg-gray-50 p-4 rounded-xl text-right space-y-2">

        <div className="flex justify-between">
          <span>القيمة الأصلية:</span>
          <span>670 د.م</span>
        </div>

        <div className="flex justify-between">
          <span>التوصيل:</span>
          <span className="text-green-600">مجاني</span>
        </div>

        <div className="flex justify-between">
          <span>المجموع:</span>
          <span>670 د.م</span>
        </div>

        <div className="flex justify-between font-bold text-green-700">
          <span>سعر الباقة:</span>
          <span>550 د.م</span>
        </div>

        <div className="flex justify-between text-red-600">
          <span>وفرت:</span>
          <span>120 د.م</span>
        </div>

      </div>

    </main>
  );
}
