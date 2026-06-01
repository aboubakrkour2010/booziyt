"use client";

import { use } from "react";
import { useState } from "react";
import { products } from "../../../data/products";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = use(params);

  const product = products.find(
    (item) => item.slug === slug
  );

  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  if (!product) {
    return (
      <div className="p-10 text-center text-2xl">
        المنتج غير موجود
      </div>
    );
  }

  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0]
  );

  return (

    <div className="max-w-7xl mx-auto p-5 md:p-10">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}

        <div>

          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-3xl shadow-lg"
          />

        </div>

        {/* CONTENT */}

        <div>

          {/* TITLE */}

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {product.title}
          </h1>

          {/* PRICE */}

          <p className="text-4xl font-bold text-[#2f8f6b] mb-6">
            {selectedSize.price} د.م
          </p>

          {/* SIZES */}

          <div className="mb-8">

            <h2 className="font-bold text-lg mb-4">
              اختر الحجم
            </h2>

            <div className="flex gap-4 flex-wrap">

              {product.sizes.map((size) => (

                <button
                  key={size.label}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 rounded-2xl border transition font-bold
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

          </div>

          {/* DESCRIPTION */}

          <p className="text-gray-600 leading-8 mb-8 text-lg">
            {product.description}
          </p>

          {/* FEATURES */}

          <div className="mb-8">

            <h2 className="text-2xl font-bold mb-4">
              المميزات
            </h2>

            <ul className="space-y-3 text-gray-700 text-lg">

              <li>✅ منتج طبيعي 100%</li>
              <li>✅ جودة عالية</li>
              <li>✅ توصيل سريع لجميع المدن</li>
              <li>✅ الدفع عند الاستلام</li>

            </ul>

          </div>

          {/* BUTTON */}

          <button
            onClick={() => {

              const cartItem = {
                ...product,
                selectedSize,
                price: selectedSize.price,
              };

              setSelectedProduct(cartItem);

              setShowPopup(true);

              localStorage.setItem(
                "cart",
                JSON.stringify([
                  ...JSON.parse(localStorage.getItem("cart") || "[]"),
                  cartItem,
                ])
              );

            }}
            className="w-full bg-[#2f8f6b] hover:bg-[#267456] transition text-white py-4 rounded-2xl text-lg font-bold"
          >

            🛒 إضافة إلى السلة

          </button>

        </div>

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

              🛒 عرض السلة

            </a>

            <a
              href="/checkout"
              className="w-full bg-[#E38F00FF] text-white py-3 rounded-xl font-semibold flex items-center justify-center"
            >

              ⚡ إتمام الطلب مباشرة

            </a>

          </div>

        </div>

      )}

    </div>

  );
}
