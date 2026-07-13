"use client";

import { useState } from "react";
import Link from "next/link";

export default function AmlouPage() {

  const products = [

    {
      slug: "amlou-almond",
      name: "أملو باللوز",
      image: "/amlou1.webp",
      oldPrice: "170 د.م",

      sizes: [
        {
          label: "370g",
          price: 80,
        },
        {
          label: "700g",
          price: 160,
        },
      ],
    },

    {
      slug: "amlou-cashew",
      name: "أملو الأكاجو",
      image: "/amlou2.webp",
      oldPrice: "139 د.م",

      sizes: [
        {
          label: "370g",
          price: 110,
        },
        {
          label: "700g",
          price: 200,
        },
      ],
    },

    {
      slug: "amlou-pistachio",
      name: "أملو بيستاش",
      image: "/amlou3.webp",
      oldPrice: "149 د.م",

      sizes: [
        {
          label: "370g",
          price: 129,
        },
        {
          label: "700g",
          price: 250,
        },
      ],
    },

    {
      slug: "nuts-honey-mix",
      name: "خلطة المكسرات بالعسل",
      image: "/amlou4.webp",
      oldPrice: "350 د.م",

      sizes: [
        {
          label: "500g",
          price: 250,
        },
        {
          label: "1Kg",
          price: 450,
        },
      ],
    },

    {
      slug: "pumpkin-seeds-amlou",
      name: "أملو بذور اليقطين",
      image: "/amlou5.webp",
      oldPrice: "95 د.م",

      sizes: [
        {
          label: "370g",
          price: 80,
        },
        {
          label: "700g",
          price: 150,
        },
      ],
    },

    {
      slug: "cocoa-amlou",
      name: "أملو كاكاو",
      image: "/amlou6.webp",
      oldPrice: "74,99 د.م",

      sizes: [
        {
          label: "1Kg",
          price: 60,
        },
      ],
    },

  ];

  const [showPopup, setShowPopup] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const [cartCount, setCartCount] = useState(0);

  const [total, setTotal] = useState(0);

  const [selectedSizes, setSelectedSizes] = useState<any>({});

  const addToCart = (product: any) => {

    const selectedSize =
      selectedSizes[product.slug] || product.sizes[0];

    const productToAdd = {
      ...product,
      selectedSize,
      price: selectedSize.price,
    };

    setSelectedProduct(productToAdd);

    setCartCount(cartCount + 1);

    setTotal(total + selectedSize.price);

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

    <main className="bg-[#f3ebdf] min-h-screen p-4">

      <h1 className="text-3xl font-bold text-center mb-10">
        منتجات أملو
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {products.map((product, index) => {

          const currentSize =
            selectedSizes[product.slug] || product.sizes[0];

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

                <h2 className="text-base font-bold mb-2 leading-6">
                  {product.name}
                </h2>

                {/* SIZES */}

                <div className="flex justify-center gap-2 mb-3 flex-wrap">

                  {product.sizes.map((size) => (

                    <button
                      key={size.label}
                      onClick={() =>
                        setSelectedSizes({
                          ...selectedSizes,
                          [product.slug]: size,
                        })
                      }
                      className={`px-3 py-1 rounded-full text-xs border transition
                      ${
                        currentSize.label === size.label
                          ? "bg-[#2f8f6b] text-white border-[#2f8f6b]"
                          : "bg-white border-gray-300 text-black"
                      }`}
                    >

                      {size.label}

                    </button>

                  ))}

                </div>

                {/* PRICE */}

                <div className="flex justify-center items-center gap-2">

                  <p className="text-green-600 text-xl font-bold">
                    {currentSize.price} د.م
                  </p>

                  <p className="text-gray-400 line-through text-sm">
                    {product.oldPrice}
                  </p>

                </div>

                {/* BUTTONS */}

                <div className="flex gap-2 mt-4">

                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-[#2f8f6b] hover:bg-[#267456] text-white py-3 rounded-xl font-bold transition"
                  >

                    🛒 أضف إلى السلة

                  </button>

                  <Link
                    href={`/product/${product.slug}`}
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
                  الحجم: {selectedProduct.selectedSize.label}
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
