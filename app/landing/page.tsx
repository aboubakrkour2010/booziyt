"use client";
import { useState } from "react";

export default function LandingPage() {

  const [qty, setQty] = useState(1);
  const [openDesc, setOpenDesc] = useState(false);

  return (
    <main className="max-w-xl mx-auto px-4">

      {/* صورة */}
      <img src="/flowers-pack.webp" className="w-full rounded-2xl mt-6 shadow-lg"/>

      {/* العنوان */}
      <h1 className="text-3xl font-black mt-4 text-right">
        باقة الأزهار
      </h1>

      {/* التقييم */}
      <div className="flex items-center gap-2 mt-2 text-gray-500">
        <span>0/5</span>
        <div className="text-yellow-400 text-xl">★★★★★</div>
      </div>

      {/* الثمن */}
      <div className="mt-4">

        <div className="flex items-center gap-3">
          <span className="line-through text-gray-400 text-lg">
            670 د.م
          </span>

          <span className="text-3xl font-black text-green-700">
            550 د.م
          </span>
        </div>

        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mt-2 inline-block">
          وفر 120 د.م
        </span>
      </div>

      {/* المخزون */}
      <div className="mt-3">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          متوفر في المخزون
        </span>
      </div>

      {/* الكمية */}
      <div className="mt-5 border rounded-xl flex justify-between items-center p-3">
        <button onClick={() => setQty(qty + 1)}>+</button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
      </div>

      {/* زر متحرك */}
      <button className="w-full bg-green-600 text-white py-4 rounded-xl mt-4 font-bold animate-pulse">
        اطلب الآن ({550 * qty} د.م)
      </button>

      {/* وصف */}
      <div className="mt-6 border-t pt-4">
        <button onClick={() => setOpenDesc(!openDesc)} className="w-full text-right font-bold">
          وصف المنتج
        </button>

        {openDesc && (
          <p className="mt-3 text-gray-600 text-right">
            باقة الأزهار تجمع بين أفضل المنتجات الطبيعية:
            زيت أركان نقي، أملو باللوز، عسل الكالبتوس، عسل الأزهار، وخل التفاح.
            مثالية للصحة والطاقة اليومية.
          </p>
        )}
      </div>

      {/* المحتويات */}
      <div className="mt-6">
        <h2 className="font-black text-right mb-4">
          محتويات الباقة (5 منتجات)
        </h2>

        {[
          { name: "زيت أركان", price: 150, weight: "250 مل" },
          { name: "عسل الكالبتوس", price: 200, weight: "1 كيلو" },
          { name: "أملو باللوز", price: 160, weight: "700 غ" },
          { name: "عسل الأزهار", price: 120, weight: "1 كيلو" },
          { name: "خل التفاح", price: 40, weight: "500 مل" },
        ].map((p, i) => (
          <div key={i} className="bg-gray-50 p-4 rounded-xl mb-3 text-right">
            <h3 className="font-bold">{p.name}</h3>
            <p className="text-gray-500">{p.weight}</p>
            <p className="text-green-700">{p.price} د.م</p>
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
          <span>120 د.م</span>
        </div>

      </div>

    </main>
  );
}
