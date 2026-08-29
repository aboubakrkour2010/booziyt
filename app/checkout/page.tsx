"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [subtotal, setSubtotal] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      setCartItems(parsed);

      let totalPrice = 0;
      parsed.forEach((item: any) => {
        totalPrice += item.selectedSize?.price || item.price || 0;
      });

      setSubtotal(totalPrice);
    }
  }, []);

  const total = subtotal;

  const handleOrder = async () => {
    if (!name || !phone || !city) {
      alert("المرجو ملئ جميع المعلومات");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          city,
          total,
          cartItems,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.removeItem("cart");
        window.location.href = "/thank-you";
      } else {
        alert("وقع مشكل أثناء الإرسال");
      }
    } catch (error) {
      alert("خطأ في الإرسال");
    }

    setLoading(false);
  };

  const cities = [
    "أكادير","الدار البيضاء","الرباط","مراكش","طنجة","فاس","وجدة","القنيطرة",
    "تطوان","العيون","سلا","تمارة","آسفي","الجديدة","بني ملال","خريبكة",
    "الناظور","الحسيمة","ورزازات","تزنيت","الراشيدية","الداخلة","الصويرة",
    "بركان","تاوريرت","القصر الكبير","العرائش","المحمدية","سطات","مكناس"
  ];

  return (
    <main className="bg-[#f3ebdf] min-h-screen p-4">
      <div className="max-w-xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-8">
          إتمام الطلب
        </h1>

        {/* FORM */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">

          <h2 className="text-lg font-bold mb-4 text-right">
            معلوماتك
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="الإسم الكامل"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-xl p-4 text-right focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="tel"
              placeholder="رقم الهاتف"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-xl p-4 text-right focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
  type="text"
  placeholder="المدينة"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="w-full border rounded-xl p-4 text-right focus:outline-none focus:ring-2 focus:ring-green-500"
/>

          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-white rounded-2xl p-6 shadow-md">

          <h2 className="text-lg font-bold mb-4 text-right">
            ملخص الطلب
          </h2>

          <div className="space-y-3 mb-4">

            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between border-b pb-2">

                <span className="text-sm">
                  {item.title || item.name}
                </span>

                <span className="text-green-600 font-bold text-sm">
                  {item.selectedSize?.price || item.price} د.م
                </span>

              </div>
            ))}

          </div>

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>المجموع</span>
            <span className="text-green-600">{total} د.م</span>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleOrder}
            disabled={loading}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition"
          >
            {loading ? "جاري إرسال الطلب..." : "تأكيد الطلب"}
          </button>

        </div>

      </div>
    </main>
  );
}
