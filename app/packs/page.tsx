"use client";

import { useState } from "react";

export default function PacksPage() {

  const packs = [

    {
      name: "باقة أملو 250 كرام",
      price: 320,
      oldPrice: "370 د.م",
      image: "/pack1.png.png",
      type: "pack",
    },

    {
      name: "باقة أملو 370 كرام",
      price: 420,
      oldPrice: "500 د.م",
      image: "/pack2.png.png",
      type: "pack",
    },

    {
      name: "باقة أرݣان",
      price: 550,
      oldPrice: "620 د.م",
      image: "/pack3.png.jpg",
      type: "pack",
    },

    {
      name: "باقة الأصالة",
      price: 600,
      oldPrice: "710 د.م",
      image: "/pack4.png.jpg",
      type: "pack",
    },

    {
      name: "باقة الكرم",
      price: 550,
      oldPrice: "610 د.م",
      image: "/pack5.png.jpg",
      type: "pack",
    },

    {
      name: "باقة تادرات",
      price: 550,
      oldPrice: "700 د.م",
      image: "/pack6.png.jpg",
      type: "pack",
    },

    {
      name: "باقة الصيف",
      price: 550,
      oldPrice: "600 د.م",
      image: "/pack7.png.jpg",
      type: "pack",
    },

    {
      name: "باقة العسل الأبيض",
      price: 550,
      oldPrice: "590 د.م",
      image: "/pack8.png.jpg",
      type: "pack",
    },

    {
      name: "باقة وردة",
      price: 550,
      oldPrice: "620 د.م",
      image: "/pack9.png.png",
      type: "pack",
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

    <main className="bg-[#f3ebdf] min-h-screen p-4">

      <h1 className="text-3xl font-bold text-center mb-10 text-[#7a0000]">
        الباقات و العروض
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {packs.map((pack, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md"
          >

            <div className="relative bg-[#f8f3eb]">

              <img
                src={pack.image}
                className="w-full h-[190px] object-contain p-3"
              />

            </div>

            <div className="p-4 text-center">

              <h2 className="text-lg font-bold mb-2 leading-6">
                {pack.name}
              </h2>

              <div className="flex justify-center items-center gap-2">

                <p className="text-green-600 text-2xl font-bold">
                  {pack.price} د.م
                </p>

                <p className="text-gray-400 line-through text-sm">
                  {pack.oldPrice}
                </p>

              </div>

              <button
                onClick={() => addToCart(pack)}
                className="w-full mt-4 bg-[#2f8f6b] hover:bg-[#267456] text-white py-3 rounded-xl font-bold transition"
              >

                🛒 أضف إلى السلة

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* POPUP */}

      {showPopup && selectedProduct && (

        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-sm p-4 relative">

            {/* CLOSE */}

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 left-3 text-2xl text-gray-400"
            >

              ×

            </button>

            {/* SUCCESS */}

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

            {/* PRODUCT */}

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
                  باقة
                </p>

                <p className="text-[#2f8f6b] font-bold text-lg">
                  {selectedProduct.price} د.م
                </p>

              </div>

            </div>

            {/* BUTTONS */}

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
            <a
  href="/checkout"
  className="w-full bg-[#7a0000] text-white py-3 rounded-xl font-semibold mb-3 flex items-center justify-center"
>
  ⚡ إتمام الطلب مباشرة
</a>


            {/* TOTAL */}

            <div className="bg-[#edf7f2] rounded-xl p-3 text-center text-[#2f8f6b] font-bold text-sm">

              المجموع: {total} د.م

            </div>

          </div>

        </div>

      )}

    </main>

  );
}

