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

      <div className="grid md:grid-cols-2 gap-10 items-start">

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

          <h1 className="text-4xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-3xl font-bold text-black mb-6">
            {selectedSize.price} MAD
          </p>

          {/* SIZES */}

          <div className="mb-6">

            <h2 className="font-semibold text-lg mb-3">
              اختر الحجم
            </h2>

            <div className="flex gap-3 flex-wrap">

              {product.sizes.map((size) => (

                <button
                  key={size.label}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-3 rounded-2xl border transition
                  ${
                    selectedSize.label === size.label
                      ? "bg-black text-white border-black"
                      : "bg-white text-black"
                  }`}
                >
                  {size.label}
                </button>

              ))}

            </div>

          </div>

          {/* DESCRIPTION */}

          <p className="text-gray-600 leading-8 mb-8">
            {product.description}
          </p>

          {/* FEATURES */}

          <div className="mb-8">

            <h2 className="text-xl font-bold mb-4">
              المميزات
            </h2>

            <ul className="space-y-3 text-gray-700">

              <li>✅ منتج طبيعي 100%</li>
              <li>✅ جودة عالية</li>
              <li>✅ توصيل سريع لجميع المدن</li>
              <li>✅ الدفع عند الاستلام</li>

            </ul>

          </div>

          {/* BUTTONS */}

          <div className="flex gap-4">

            <button className="bg-black hover:bg-gray-800 transition text-white px-6 py-4 rounded-2xl w-full text-lg font-semibold">
              Ajouter au panier
            </button>

            <button className="border border-black hover:bg-black hover:text-white transition px-6 py-4 rounded-2xl w-full text-lg font-semibold">
              Acheter maintenant
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}
