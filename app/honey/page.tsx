"use client";

import { useState } from "react";
import Link from "next/link";

export default function HoneyPage() {

  const products = [

    {
      slug: "taj-alasal",
      title: "تاج العسل",
      image: "/honey1.webp",
      description: "عسل فاخر طبيعي غني بالفوائد.",
      sizes: [
        {
          label: "نصف كيلو",
          price: 300,
        },
        {
          label: "1 كيلو",
          price: 600,
        },
      ],
    },

    {
      slug: "thyme-honey",
      title: "عسل الزعتر",
      image: "/honey2.webp",
      description: "عسل الزعتر الطبيعي الأصلي.",
      sizes: [
        {
          label: "نصف كيلو",
          price: 200,
        },
        {
          label: "1 كيلو",
          price: 400,
        },
      ],
    },

    {
      slug: "daghmous-honey",
      title: "عسل الدغموس",
      image: "/honey3.webp",
      description: "عسل الدغموس الطبيعي.",
      sizes: [
        {
          label: "نصف كيلو",
          price: 125,
        },
        {
          label: "1 كيلو",
          price: 250,
        },
      ],
    },

    {
      slug: "sidr-honey",
      title: "عسل السدر",
      image: "/honey4.webp",
      description: "عسل السدر الأصلي.",
      sizes: [
        {
          label: "نصف كيلو",
          price: 125,
        },
        {
          label: "1 كيلو",
          price: 250,
        },
      ],
    },

    {
      slug: "choukiyat-honey",
      title: "عسل الشوكيات",
      image: "/honey5.webp",
      description: "عسل طبيعي غني بالفوائد.",
      sizes: [
        {
          label: "نصف كيلو",
          price: 150,
        },
        {
          label: "1 كيلو",
          price: 300,
        },
      ],
    },

    {
      slug: "eucalyptus-honey",
      title: "عسل الكاليتوس",
      image: "/honey6.webp",
      description: "عسل الكاليتوس الطبيعي.",
      sizes: [
        {
          label: "نصف كيلو",
          price: 100,
        },
        {
          label: "1 كيلو",
          price: 200,
        },
      ],
    },

    {
      slug: "white-honey",
      title: "العسل الأبيض",
      image: "/honey7.webp",
      description: "عسل أبيض طبيعي.",
      sizes: [
        {
          label: "نصف كيلو",
          price: 100,
        },
        {
          label: "1 كيلو",
          price: 200,
        },
      ],
    },

    {
      slug: "lemon-honey",
      title: "عسل الليمون",
      image: "/honey8.webp",
      description: "عسل الليمون الطبيعي.",
      sizes: [
        {
          label: "1 كيلو",
          price: 99,
        },
      ],
    },

  ];

  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (

    <main className="bg-[#f3ebdf] min-h-screen p-4">

      <h1 className="text-3xl font-bold text-center mb-8">
        منتجات العسل
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {products.map((product, index) => {

          const [selectedSize, setSelectedSize] = useState(
            product.sizes[0]
          );

          const addToCart = () => {

            const productToAdd = {
              ...product,
              selectedSize,
            };

            setSelectedProduct(productToAdd);

            setShowPopup(true);

            localStorage.setItem(
              "cart",
              JSON.stringify([
                ...JSON.parse(localStorage.getItem("cart") || "[]"),
                productToAdd,
              ])
            );

          };

          return (

            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >

              {/* IMAGE */}

              <div className="bg-[#f8f3eb]">

                <img
                  src={product.image}
                  className="w-full h-[350px] object-contain p-3"
                />

              </div>

              {/* CONTENT */}

              <div className="p-4 text-center">

                <h2 className="text-base font-bold text-black mb-2 leading-6">
                  {product.title}
                </h2>

                {/* SIZES */}

                <div className="flex justify-center gap-2 mb-3 flex-wrap">

                  {product.sizes.map((size) => (

                    <button
                      key={size.label}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 rounded-full text-xs border transition
                      ${
                        selectedSize.label === size.label
                          ? "bg-[#2f8f6b] text-white border-[#2f8f6b]"
                          : "bg-white text-black border-gray-300"
                      }`}
                    >

                      {size.label}

                    </button>

                  ))}

                </div>

                {/* PRICE */}

                <div className="flex justify-center items-center gap-2 mb-3">

                  <p className="text-[#2f8f6b] text-xl font-bold">
                    {selectedSize.price} د.م
                  </p>

                </div>

                {/* BUTTONS */}

                <div className="flex gap-2 mt-3">

                  <button
                    onClick={addToCart}
                    className="flex-1 bg-[#2f8f6b] hover:bg-[#267456] text-white py-3 rounded-xl text-sm font-semibold transition"
                  >

                    🛒 أضف إلى السلة

                  </button>

                  <Link
                    href={`/honey/${product.slug}`}
                    className="bg-white border border-[#2f8f6b] text-[#2f8f6b] hover:bg-[#2f8f6b] hover:text-white px-4 rounded-xl flex items-center justify-center transition"
                  >

                    عرض المنتج

                  </Link>

                </div>

              </div>

            </div>

          );

        })}

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
                  {selectedProduct.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {selectedProduct.selectedSize.label}
                </p>

                <p className="text-[#2f8f6b] font-bold text-lg">
                  {selectedProduct.selectedSize.price} د.م
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
              className="w-full bg-[#2f8f6b] text-white py-3 rounded-xl font-semibold flex items-center justify-center"
            >

              🛒 عرض السلة

            </a>

          </div>

        </div>

      )}

    </main>
  );
}
