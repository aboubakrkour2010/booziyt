"use client";

import { useEffect, useState } from "react";

export default function CartPage() {

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {

      const parsed = JSON.parse(savedCart);

      setCartItems(parsed);

      let totalPrice = 0;

      parsed.forEach((item: any) => {

        totalPrice +=
          item.selectedSize?.price || item.price || 0;

      });

      setTotal(totalPrice);

    }

  }, []);

  const removeItem = (index: number) => {

    const updated = [...cartItems];

    updated.splice(index, 1);

    setCartItems(updated);

    localStorage.setItem("cart", JSON.stringify(updated));

    let totalPrice = 0;

    updated.forEach((item: any) => {

      totalPrice +=
        item.selectedSize?.price || item.price || 0;

    });

    setTotal(totalPrice);

  };

  /* CHECK IF ALL PRODUCTS ARE PACKS */

  const isPackOnly =
    cartItems.length > 0 &&
    cartItems.every(
      (item: any) => item.type === "pack"
    );

  /* SHIPPING TEXT */

  const shippingText = isPackOnly
    ? "شحن مجاني"
    : "التوصيل على حسب المدينة";

  /* FINAL TOTAL */

  const finalTotal = total;

  return (

    <main className="bg-[#f3ebdf] min-h-screen p-4">

      <h1 className="text-3xl font-bold text-center mb-10">
        سلة التسوق
      </h1>

      {/* PRODUCTS */}

      <div className="space-y-5 max-w-3xl mx-auto">

        {cartItems.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-between"
          >

            {/* REMOVE */}

            <button
              onClick={() => removeItem(index)}
              className="text-gray-400 text-2xl"
            >

              ×

            </button>

            {/* INFO */}

            <div className="text-right flex-1 pr-4">

              <h2 className="font-bold text-lg">
                {item.title || item.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1">

                {item.type === "pack"
                  ? "باقة"
                  : item.selectedSize?.label || "1 كيلو"}

              </p>

              <p className="text-[#2f8f6b] font-bold mt-2">

                {item.selectedSize?.price || item.price} د.م

              </p>

            </div>

            {/* IMAGE */}

            <img
              src={item.image}
              className="w-24 h-24 rounded-xl object-cover"
            />

          </div>

        ))}

      </div>

      {/* SUMMARY */}

      <div className="bg-white rounded-2xl shadow-md p-5 mt-10 max-w-3xl mx-auto">

        <h2 className="text-xl font-bold mb-6 text-right">
          ملخص الطلب
        </h2>

        {/* SUBTOTAL */}

        <div className="flex items-center justify-between mb-4 text-sm">

          <span>
            المجموع الفرعي
          </span>

          <span className="font-semibold">
            {finalTotal} د.م
          </span>

        </div>

        {/* SHIPPING */}

        <div className="flex items-center justify-between mb-4 text-sm">

          <span>
            الشحن
          </span>

          <span className="text-green-600 font-semibold">

            {shippingText}

          </span>

        </div>

        <hr className="my-4" />

        {/* TOTAL */}

        <div className="flex items-center justify-between mb-6">

          <span className="text-lg font-bold">
            المجموع
          </span>

          <span className="text-xl font-bold text-[#2f8f6b]">
            {finalTotal} د.م
          </span>

        </div>

        {/* CHECKOUT */}

        <a
          href="/checkout"
          className="block w-full bg-[#2f8f6b] text-white py-4 rounded-xl font-bold text-base text-center"
        >

          إتمام الشراء

        </a>

        {/* CONTINUE */}

        <a
          href="/"
          className="block text-center mt-5 text-[#2f8f6b] text-sm"
        >

          مواصلة التسوق

        </a>

      </div>

    </main>
  );
}
