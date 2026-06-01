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

              localStorage.setItem(
                "cart",
                JSON.stringify([
                  ...JSON.parse(localStorage.getItem("cart") || "[]"),
                  cartItem,
                ])
              );

              alert("تمت إضافة المنتج إلى السلة");

            }}
            className="w-full bg-[#2f8f6b] hover:bg-[#267456] transition text-white py-4 rounded-2xl text-lg font-bold"
          >

            🛒 إضافة إلى السلة

          </button>

        </div>

      </div>

    </div>

  );
}
