"use client";

import { useState } from "react";
import Link from "next/link";

export default function HoneyPage() {

  const products = [

    {
      slug: "taj-alasal",
      name: "تاج العسل",
      price: 600,
      image: "/honey1.png.jpg",
    },

    {
      slug: "asal-zaatar",
      name: "عسل الزعتر",
      price: 400,
      image: "/honey2.png.jpg",
    },

    {
      slug: "asal-daghmous",
      name: "عسل الدغموس",
      price: 250,
      image: "/honey3.png.png",
    },

    {
      slug: "asal-sidr",
      name: "عسل السدر",
      price: 250,
      image: "/honey4.png.png",
    },

    {
      slug: "asal-chawkiyat",
      name: "عسل الشوكيات",
      price: 300,
      image: "/honey5.png.jpg",
    },

    {
      slug: "asal-kalitos",
      name: "عسل الكاليتوس",
      price: 200,
      image: "/honey6.png.jpg",
    },

    {
      slug: "asal-abyad",
      name: "العسل الأبيض",
      price: 200,
      image: "/honey7.png.jpg",
    },

    {
      slug: "asal-limoun",
      name: "عسل الليمون",
      price: 99,
      image: "/honey8.png.jpg",
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

      <h1 className="text-3xl font-bold text-center mb-8">
        منتجات العسل
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {products.map((product, index) => (

          <Link
            href={`/honey/${product.slug}`}
            key={index}
          >

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition cursor-pointer">

              <div className="bg-[#f8f3eb]">

                <img
                  src={product.image}
                  className="w-full h-[350px] object-contain p-3"
                />

              </div>

              <div className="p-4 text-center">

                <h2 className="text-base font-bold text-black mb-2 leading-6">
                  {product.name}
                </h2>

                <div className="flex justify-center gap-2 mb-3">

                  <div className="border border-gray-300 px-2 py-1 rounded-full text-xs">
                    نصف كيلو
                  </div>

                  <div className="border border-gray-300 px-2 py-1 rounded-full text-xs">
                    1 كيلو
                  </div>

                </div>

                <div className="flex justify-center items-center gap-2 mb-3">

                  <p className="text-green-700 text-xl font-bold">
                    {product.price} د.م
                  </p>

                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="w-full mt-2 bg-[#2f8f6b] hover:bg-[#267456] text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition"
                >

                  🛒 أضف إلى السلة

                </button>

              </div>

            </div>

          </Link>

        ))}

      </div>

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

            <a
              href="/checkout"
              className="w-full bg-[#E38F00FF] text-white py-3 rounded-xl font-semibold mb-3 flex items-center justify-center"
            >
              ⚡ إتمام الطلب مباشرة
            </a>

            <div className="bg-[#edf7f2] rounded-xl p-3 text-center text-[#2f8f6b] font-bold text-sm">

              المجموع: {total} د.م

            </div>

          </div>

        </div>

      )}

    </main>
  );
}
