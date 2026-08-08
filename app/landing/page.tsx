"use client";
import { useState } from "react";

export default function LandingPage() {

  const [qty, setQty] = useState(1);

  return (
    <main className="max-w-xl mx-auto px-4 pb-20 bg-[url('/bg-olive.png')] bg-cover bg-fixed">

      {/* صورة */}
      <img src="/flowers-pack.webp" className="w-full rounded-2xl mt-6 mb-4 shadow-xl"/>

      {/* العنوان */}
      <h1 className="text-4xl font-black mt-4 text-center text-black">
  باقة الأزهار 🌼
</h1>

      {/* النجوم */}
      <div className="flex justify-start mt-3 items-center gap-2 direction-rtl">
        <div className="text-yellow-400 text-5xl">★★★★★</div>
        <span className="text-gray-500">4.9/5</span>
      </div>

      {/* الثمن */}
      <div dir="rtl" className="mt-4">

        <span className="line-through text-gray-400 text-lg block">
          670 د.م
        </span>

        <div className="flex justify-start items-center gap-3">
          <span className="text-5xl font-black text-green-700">
            550 د.م
          </span>

          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
  وفر 120 د.م
</span>
        </div>

        <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm inline-block mt-3 font-bold">
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

      {/* وصف المنتج */}
      <div className="mt-10 text-right bg-white p-5 rounded-xl shadow leading-8">

  <h2 className="text-xl font-black text-green-700 mb-3">
    وصف المنتج
  </h2>

  <div className="text-gray-700 space-y-3">

    <strong>🌼 باقة الأزهار</strong>

    <p>
      دلّل عائلتك مع باقة الأزهار المختارة بعناية، والتي تجمع بين أجود المنتجات الطبيعية
      لتمنحك مذاقًا أصيلًا وفوائد غذائية متكاملة في باقة واحدة.
    </p>

    <strong>📦 محتوى الباقة:</strong>

    <p>🥄 700 غرام أملو باللوز بزيت أركان وعسل الكالبتوس</p>
    <p>مزيج فاخر بقوام كريمي ومذاق غني، مثالي للفطور أو كوجبة تمدك بالطاقة.</p>

    <p>🍯 1 كيلو عسل الكالبتوس</p>
    <p>عسل طبيعي عالي الجودة، بطعم مميز ومناسب للاستعمال اليومي.</p>

    <p>🌼 1 كيلو عسل الأزهار</p>
    <p>عسل طبيعي متعدد الأزهار، غني بالنكهة والقيمة الغذائية، يناسب جميع أفراد الأسرة.</p>

    <p>🫒 250 مل زيت أركان للأكل</p>
    <p>زيت أركان نقي 100%، مثالي للسلطات، الأطباق، أو مع الخبز.</p>

    <strong>🎁 هدية مجانية:</strong>
    <p>🍎 250 مل خل التفاح الطبيعي.</p>

    <strong>💰 السعر:</strong>
    <p>550 درهم فقط، مع شحن مجاني 🚚 إلى جميع مدن المغرب.</p>

    <strong>🎁 عرض مميز:</strong>
    <p>
      باقة متكاملة تجمع بين الجودة، المذاق الأصيل، والمنتجات الطبيعية،
      اختيار مثالي لك ولعائلتك.
    </p>

  </div>
</div>

      {/* منتجات الباقة */}
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

      {/* الحساب */}
      <div className="mt-10 bg-white p-4 rounded-xl text-right space-y-2 shadow">

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

        <div className="flex justify-between text-red-600 font-bold">
          <span>وفرت:</span>
          <span>155 د.م</span>
        </div>

      </div>

    </main>
  );
}
