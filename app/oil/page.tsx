"use client";

import { useState } from "react";

export default function OilPage() {

  const oils = [

    {
      name: "زيت أركان للأكل",
      price: 175,
      oldPrice: "190 د.م",
      image: "/oil1.jpg",
    },

    {
      name: "زيت أركان للتجميل",
      price: 175,
      oldPrice: "190 د.م",
      image: "/oil2.png",
    },

    {
      name: "زيت الزيتون البلدية",
      price: 45,
      oldPrice: "50 د.م",
      image: "/oil3.jpeg",
    },

    {
      name: "خل التفاح",
      price: 40,
      oldPrice: "50 د.م",
      image: "/oil4.png",
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

      <h1 className="text-3xl font-bold text-center mb-10 text-[#222]">
        منتجات الزيوت
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {oils.map((oil, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md"
          >

            <div className="bg-[#f8f3eb]">

              <img
                src={oil.image}
                className="w-full h-[350px] object-contain p-3"
              />

            </div>

            <div className="p-4 text-center">

              <h2 className="text-base font-bold mb-2 leading-6">
                {oil.name}
              </h2>

              {/* SIZES */}

              <div className="flex justify-center gap-2 mb-3 flex-wrap">

                {(oil.name === "زيت الزيتون البلدية") ? (

                  <div className="border border-gray-300 px-2 py-1 rounded-full text-xs">
                    5L
                  </div>

                ) : (

                  <>
                    <div className="border border-gray-300 px-2 py-1 rounded-full text-xs">
                      250ml
                    </div>

                    <div className="border border-gray-300 px-2 py-1 rounded-full text-xs">
                      500ml
                    </div>
                  </>

                )}

              </div>

              {/* PRICE */}

              <div className="flex justify-center items-center gap-2">

                <p className="text-green-600 text-xl font-bold">
                  {oil.price} د.م
                </p>

                <p className="text-gray-400 line-through text-sm">
                  {oil.oldPrice}
                </p>

              </div>

              {/* BUTTON */}

              <button
                onClick={() => addToCart(oil)}
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
                  الكمية: 1
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
  className="w-full bg-[#E38F00FF] text-white py-3 rounded-xl font-semibold mb-3 flex items-center justify-center"
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
