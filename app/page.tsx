"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const categories = [
    {
      title: "الباقات و العروض",
      image: "/slider.png",
      link: "/packs",
    },

    {
      title: "منتجات العسل",
      image: "/honey.jpeg",
      link: "/honey",
    },

    {
      title: "منتجات أملو",
      image: "/amlou.jpeg",
      link: "/amlou",
      position: "object-bottom",
    },

    {
      title: "منتجات الزيوت",
      image: "/oil.jpeg",
      link: "/oil",
      position: "object-bottom",
    },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (product: any) => {

    setSelectedProduct(product);

    setCartCount(cartCount + 1);

    setTotal(total + product.price);

    setShowPopup(true);

    localStorage.setItem(
      "cart",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("cart") || "[]"),
        product,
      ])
    );

  };

  return (

    <main className="bg-[#f3ebdf] min-h-screen">

      {/* SLIDER */}

      <div className="w-full">

        <img
          src="/slider.png"
          className="w-full h-auto"
        />

      </div>

      {/* TITLE */}

      <div className="text-center py-10">

        <h1 className="text-5xl font-bold text-green-900">
          Booziyt
        </h1>

        <p className="text-xl mt-4 text-gray-700">
          منتجات طبيعية أصلية وبجودة عالية
        </p>

      </div>

      {/* CATEGORIES */}

      <section className="max-w-6xl mx-auto px-4 pb-20">

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          تصنيفاتنا
        </h3>

        <div className="grid grid-cols-2 gap-4">

          {categories.map((cat, index) => (

            <Link
              href={cat.link}
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-lg"
            >

              <img
                src={cat.image}
                className={`w-full aspect-square object-cover ${cat.position || "object-center"}`}
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                <h3 className="text-white text-lg md:text-2xl font-bold text-center leading-7 px-2">
                  {cat.title}
                </h3>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* OFFERS */}

      <section className="max-w-6xl mx-auto px-4 pb-20">

        <h2 className="text-3xl font-bold text-center mb-10 text-[#7a0000]">
          العروض المتوفرة
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* OFFER 1 */}

          <div className="bg-white rounded-2xl overflow-hidden shadow-md">

            <div className="bg-[#f8f3eb]">

              <img
                src="/offer1.png"
                className="w-full h-[190px] object-contain p-3"
              />

            </div>

            <div className="p-4 text-center">

              <h3 className="text-lg font-bold mb-2">
                باقة أملو 370g
              </h3>

              <p className="text-green-700 text-2xl font-bold">
                420 د.م
              </p>

              <button
                onClick={() =>
                  addToCart({
                    name: "باقة أملو 370g",
                    price: 420,
                    image: "/offer1.png",
                    type: "pack",
                  })
                }
                className="w-full mt-4 bg-[#2f8f6b] text-white py-3 rounded-xl font-bold"
              >

                🛒 أضف إلى السلة

              </button>

            </div>

          </div>

          {/* OFFER 2 */}

          <div className="bg-white rounded-2xl overflow-hidden shadow-md">

            <div className="bg-[#f8f3eb]">

              <img
                src="/offer2.png"
                className="w-full h-[190px] object-contain p-3"
              />

            </div>

            <div className="p-4 text-center">

              <h3 className="text-lg font-bold mb-2">
                أملو الأكاجو
              </h3>

              <p className="text-green-700 text-2xl font-bold">
                180 د.م
              </p>

              <button
                onClick={() =>
                  addToCart({
                    name: "أملو الأكاجو",
                    price: 180,
                    image: "/offer2.png",
                  })
                }
                className="w-full mt-4 bg-[#2f8f6b] text-white py-3 rounded-xl font-bold"
              >

                🛒 أضف إلى السلة

              </button>

            </div>

          </div>

          {/* OFFER 3 */}

          <div className="bg-white rounded-2xl overflow-hidden shadow-md">

            <div className="bg-[#f8f3eb]">

              <img
                src="/offer3.png"
                className="w-full h-[190px] object-contain p-3"
              />

            </div>

            <div className="p-4 text-center">

              <h3 className="text-lg font-bold mb-2">
                باقة وردة
              </h3>

              <p className="text-green-700 text-2xl font-bold">
                550 د.م
              </p>

              <button
                onClick={() =>
                  addToCart({
                    name: "باقة وردة",
                    price: 550,
                    image: "/offer3.png",
                    type: "pack",
                  })
                }
                className="w-full mt-4 bg-[#2f8f6b] text-white py-3 rounded-xl font-bold"
              >

                🛒 أضف إلى السلة

              </button>

            </div>

          </div>

          {/* OFFER 4 */}

          <div className="bg-white rounded-2xl overflow-hidden shadow-md">

            <div className="bg-[#f8f3eb]">

              <img
                src="/offer4.png"
                className="w-full h-[190px] object-contain p-3"
              />

            </div>

            <div className="p-4 text-center">

              <h3 className="text-lg font-bold mb-2">
                زيت الزيتون
              </h3>

              <p className="text-green-700 text-2xl font-bold">
                45 د.م
              </p>

              <button
                onClick={() =>
                  addToCart({
                    name: "زيت الزيتون",
                    price: 45,
                    image: "/offer4.png",
                  })
                }
                className="w-full mt-4 bg-[#2f8f6b] text-white py-3 rounded-xl font-bold"
              >

                🛒 أضف إلى السلة

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* POPUP */}

      {showPopup && selectedProduct && (

        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-sm p-4 relative">

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 left-3 text-2xl text-gray-400"
            >

              ×

            </button>

            <div className="flex justify-center mb-3">

              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-3xl text-green-600">

                ✓

              </div>

            </div>

            <h2 className="text-xl font-bold text-center mb-1">
              تمت الإضافة بنجاح!
            </h2>

            <p className="text-gray-500 text-sm text-center mb-4">
              تم إضافة المنتج إلى سلة التسوق
            </p>

            <div className="bg-[#f8f8f8] rounded-2xl p-3 flex items-center justify-between mb-4">

              <img
                src={selectedProduct.image}
                className="w-20 h-20 object-contain"
              />

              <div className="text-right">

                <h3 className="font-bold text-base">
                  {selectedProduct.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  الكمية: 1
                </p>

                <p className="text-[#2f8f6b] font-bold text-lg">
                  {selectedProduct.price} د.م
                </p>

              </div>

            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full border py-3 rounded-xl mb-3 text-gray-600 font-semibold"
            >

              متابعة التسوق

            </button>

            <a
              href="/cart"
              className="w-full bg-[#2f8f6b] text-white py-3 rounded-xl font-semibold mb-3 flex items-center justify-center"
            >

              🛒 عرض السلة ({cartCount})

            </a>

            <div className="bg-[#edf7f2] rounded-xl p-3 text-center text-[#2f8f6b] font-bold text-sm">

              المجموع: {total} د.م

            </div>

          </div>

        </div>

      )}

    {/* WHATSAPP + FACEBOOK */}

<div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">

  <a
    href="https://wa.me/212663756621"
    target="_blank"
    className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg font-bold flex items-center gap-2 transition"
  >
    💬 واتساب
  </a>

  <a
    href="https://facebook.com/Boo-Ziyt-61574782794043"
    target="_blank"
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg font-bold flex items-center gap-2 transition"
  >
    📘 فايسبوك
  </a>

</div>
    </main>
  );
}
