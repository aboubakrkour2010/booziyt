"use client";
import { useState } from "react";

export default function LandingPage() {

  const [qty, setQty] = useState(1);
  const [openDesc, setOpenDesc] = useState(false);

  return (
    <main className="max-w-xl mx-auto px-4">

      {/* صورة */}
      <img
        src="/flowers-pack.webp"
        className="w-full rounded-2xl mt-6"
      />

      {/* العنوان */}
      <h1 className="text-3xl font-black mt-4 text-right">
        باقة أملو
      </h1>

      {/* التقييم */}
      <div className="flex items-center gap-2 mt-2 text-gray-500">
        <span>0/5</span>
        <div className="flex text-gray-300 text-xl">
          ⭐⭐⭐⭐⭐
        </div>
      </div>

      {/* الثمن */}
      <div className="mt-4 flex items-center gap-3">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          12% خصم
        </span>

        <span className="line-through text-gray-400">
          580 د.م
        </span>

        <span className="text-3xl font-black text-green-700">
          510 د.م
        </span>
      </div>

      {/* الحالة */}
      <div className="flex gap-3 mt-3">
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

      {/* زر */}
      <button className="w-full bg-green-600 text-white py-3 rounded-xl mt-4 font-bold">
        أضف إلى السلة ({510 * qty} د.م)
      </button>

      {/* وصف */}
      <div className="mt-6 border-t pt-4">
        <button
          onClick={() => setOpenDesc(!openDesc)}
          className="w-full text-right font-bold"
        >
          وصف المنتج
        </button>

        {openDesc && (
          <p className="mt-3 text-gray-600 text-right">
            باقة طبيعية 100% تحتوي على أملو وزيت أركان وعسل طبيعي.
          </p>
        )}
      </div>

      {/* المحتويات */}
      <div className="mt-6">

        <h2 className="font-black text-right mb-4">
          محتويات الباقة (4 منتجات)
        </h2>

        {/* منتج 1 */}
        <div className="bg-gray-50 p-4 rounded-xl mb-4">
          <img src="/oil1.png" className="w-20 rounded-lg mb-2" />
          <h3>زيت أركان</h3>
          <p className="text-gray-500">250 مل</p>
          <p className="text-green-700">150 د.م</p>
          <a href="/oil" className="text-green-600">عرض المنتج</a>
        </div>

        {/* منتج 2 */}
        <div className="bg-gray-50 p-4 rounded-xl mb-4">
          <img src="/honey6.webp" className="w-20 rounded-lg mb-2" />
          <h3>عسل الكالبتوس</h3>
          <p className="text-gray-500">1 كيلو</p>
          <p className="text-green-700">200 د.م</p>
          <a href="/honey/eucalyptus-honey" className="text-green-600">عرض المنتج</a>
        </div>

        {/* منتج 3 */}
        <div className="bg-gray-50 p-4 rounded-xl mb-4">
          <img src="/amlou1.webp" className="w-20 rounded-lg mb-2" />
          <h3>أملو</h3>
          <p className="text-gray-500">700 غرام</p>
          <p className="text-green-700">160 د.م</p>
          <a href="/product/amlou-almond" className="text-green-600">عرض المنتج</a>
        </div>

        {/* منتج 4 */}
        <div className="bg-gray-50 p-4 rounded-xl mb-4">
          <img src="/flowers-pack.webp" className="w-20 rounded-lg mb-2" />
          <h3>عسل الأزهار</h3>
          <p className="text-gray-500">1 كيلو</p>
          <p className="text-green-700">120 د.م</p>
          <a href="/honey/flowers-honey" className="text-green-600">عرض المنتج</a>
        </div>

      </div>

      {/* الحساب */}
      <div className="mt-6 bg-gray-50 p-4 rounded-xl text-right space-y-2">

        <div className="flex justify-between">
          <span>القيمة الإجمالية:</span>
          <span>580 د.م</span>
        </div>

        <div className="flex justify-between">
          <span>رسوم التوصيل:</span>
          <span>35 د.م</span>
        </div>

        <div className="flex justify-between">
          <span>المجموع:</span>
          <span>615 د.م</span>
        </div>

        <div className="flex justify-between font-bold text-green-700">
          <span>سعر الباقة:</span>
          <span>510 د.م</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>وفرت:</span>
          <span>70 د.م</span>
        </div>

      </div>

    </main>
  );
}
