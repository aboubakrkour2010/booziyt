"use client";

import { use } from "react";
import { useState } from "react";

const products = [

  {
    slug: "taj-alasal",
    title: "تاج العسل",
    image: "/honey1.png.jpg",
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
    slug: "asal-zaatar",
    title: "عسل الزعتر",
    image: "/honey2.png.jpg",
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
    slug: "asal-daghmous",
    title: "عسل الدغموس",
    image: "/honey3.png.png",
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
    slug: "asal-sidr",
    title: "عسل السدر",
    image: "/honey4.png.png",
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
    slug: "asal-chawkiyat",
    title: "عسل الشوكيات",
    image: "/honey5.png.jpg",
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
    slug: "asal-kalitos",
    title: "عسل الكاليتوس",
    image: "/honey6.png.jpg",
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
    slug: "asal-abyad",
    title: "العسل الأبيض",
    image: "/honey7.png.jpg",
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
    slug: "asal-limoun",
    title: "عسل الليمون",
    image: "/honey8.png.jpg",
    description: "عسل الليمون الطبيعي.",
    sizes: [
      {
        label: "نصف كيلو",
        price: 50,
      },
      {
        label: "1 كيلو",
        price: 99,
      },
    ],
  },

];

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
            className="w-full rounded-3xl"
          />

        </div>

        {/* CONTENT */}

        <div>

          <h1 className="text-5xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-4xl font-bold text-[#2f8f6b] mb-6">
            {selectedSize.price} د.م
          </p>

          {/* SIZES */}

          <div className="mb-8">

            <h2 className="font-bold text-lg mb-4">
              اختر الحجم
            </h2>

            <div className="flex gap-4">

              {product.sizes.map((size) => (

                <button
                  key={size.label}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 rounded-2xl border transition font-bold
                  ${
                    selectedSize.label === size.label
                      ? "bg-[#2f8f6b] text-white border-[#2f8f6b]"
                      : "bg-white text-black"
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

          {/* BUTTONS */}

          <div className="flex gap-3">

            <button className="bg-[#2f8f6b] hover:bg-[#267456] transition text-white px-6 py-4 rounded-2xl flex-1 text-lg font-bold">
              🛒 إضافة إلى السلة
            </button>

            <button className="bg-white border border-[#2f8f6b] text-[#2f8f6b] hover:bg-[#2f8f6b] hover:text-white transition px-5 py-4 rounded-2xl font-bold">
              👁
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}
