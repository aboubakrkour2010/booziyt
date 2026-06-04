"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [subtotal, setSubtotal] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {

      const parsed = JSON.parse(savedCart);

      setCartItems(parsed);

      let totalPrice = 0;

      parsed.forEach((item: any) => {
        totalPrice += item.price;
      });

      setSubtotal(totalPrice);

    }

  }, []);

  const isPackOnly =
    cartItems.length > 0 &&
    cartItems.every(
      (item: any) => item.type === "pack"
    );

  let shipping = 0;

  if (!isPackOnly) {

    shipping =
      city === "أكادير"
        ? 20
        : city
        ? 40
        : 0;

  }

  const total = subtotal + shipping;

  const handleOrder = async () => {

    if (!name || !phone || !city || !paymentMethod) {

      alert("المرجو ملئ جميع المعلومات");

      return;

    }

    try {

      const response = await fetch("/api/order", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          name: name,
          phone: phone,
          city: city,
          address: address,
          paymentMethod: paymentMethod,
          total: total,
          cartItems,

        }),

      });

      const data = await response.json();

      if (data.success) {

        localStorage.removeItem("cart");

        window.location.href = "/thank-you";

      } else {

        alert(data.error || "وقع مشكل أثناء إرسال الطلب");

      }

    } catch (error: any) {

      alert(error.message || "خطأ في الإرسال");

    }

  };

  const cities = [
    "أكادير",
    "الدار البيضاء",
    "الرباط",
    "مراكش",
    "طنجة",
    "فاس",
    "وجدة",
    "القنيطرة",
    "تطوان",
    "العيون",
    "سلا",
    "تمارة",
    "آسفي",
    "الجديدة",
    "بني ملال",
    "خريبكة",
    "الناظور",
    "الحسيمة",
    "ورزازات",
    "تزنيت",
    "الراشيدية",
    "الداخلة",
    "الصويرة",
    "بركان",
    "تاوريرت",
    "القصر الكبير",
    "العرائش",
    "المحمدية",
    "سطات",
    "مكناس",
    "تاونات",
    "شفشاون",
    "أزيلال",
    "قلعة السراغنة",
    "إنزكان",
    "أيت ملول",
    "كلميم",
    "سيدي إفني",
    "طانطان",
    "جرادة",
    "الفقيه بن صالح",
    "اليوسفية",
    "سيدي بنور",
    "بنجرير",
    "أزرو",
    "إفران",
    "صفرو",
    "تارودانت",
    "زاكورة"
  ];

  return (

    <main className="bg-[#f3ebdf] min-h-screen p-4">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-10">

          إتمام الطلب

        </h1>

        {/* CUSTOMER INFO */}

        <div className="bg-white rounded-2xl p-5 shadow-md mb-8">

          <h2 className="text-xl font-bold mb-6 text-right">

            معلومات الزبون

          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="الإسم الكامل"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-xl p-4 text-right"
            />

            <input
              type="text"
              placeholder="رقم الهاتف"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-xl p-4 text-right"
            />

            <div>

              <input
                type="text"
                placeholder="ابحث عن مدينتك..."
                className="w-full border rounded-xl p-4 text-right mb-3"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <div className="max-h-60 overflow-y-auto border rounded-xl bg-white">

                {cities
                  .filter((item) =>
                    item.includes(city)
                  )
                  .map((item) => (

                    <div
                      key={item}
                      onClick={() => setCity(item)}
                      className="p-3 border-b cursor-pointer hover:bg-gray-100 text-right"
                    >

                      {item}

                    </div>

                  ))}

              </div>

            </div>

            <textarea
              placeholder="العنوان الكامل (اختياري)"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded-xl p-4 text-right h-28"
            />

          </div>

        </div>

        {/* PAYMENT */}

        <div className="bg-white rounded-2xl shadow-md p-5 mb-8">

          <h2 className="text-xl font-bold mb-5">
            طريقة الدفع
          </h2>

          {/* BANK */}

          <label
            onClick={() => setPaymentMethod("bank")}
            className={`border rounded-2xl p-4 flex items-center justify-between mb-4 cursor-pointer transition ${
              paymentMethod === "bank"
                ? "border-green-600 bg-green-50"
                : "border-gray-200"
            }`}
          >

            <div className="flex items-center gap-3">

              <img
                src="/logoo.jpg"
                className="w-12 h-12 object-contain"
              />

              <span className="font-semibold">
                تحويل بنكي
              </span>

            </div>

            <input
              type="radio"
              checked={paymentMethod === "bank"}
              readOnly
            />

          </label>

          {paymentMethod === "bank" && (

            <div className="bg-[#f8f8f8] rounded-2xl p-5 mb-5 text-right">

              <h3 className="font-bold text-lg mb-4">
                معلومات الحساب البنكي
              </h3>

              <div className="space-y-3 text-gray-700">

                <p>
                  <span className="font-bold">الإسم الكامل:</span>{" "}
                  Kour mohamed
                </p>

                <p>
                  <span className="font-bold">البنك:</span>{" "}
                  القرض الفلاحي
                </p>

                <p className="break-all">
                  <span className="font-bold">RIB:</span>{" "}
                  225010073800762601010758
                </p>

              </div>

              <a
                href="https://wa.me/212663756621"
                target="_blank"
                className="w-full mt-5 bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl font-bold flex items-center justify-center"
              >

                إرسال صورة الوصل عبر واتساب

              </a>

            </div>

          )}

          {/* CASHPLUS */}

          <label
            onClick={() => setPaymentMethod("cashplus")}
            className={`border rounded-2xl p-4 flex items-center justify-between mb-4 cursor-pointer transition ${
              paymentMethod === "cashplus"
                ? "border-green-600 bg-green-50"
                : "border-gray-200"
            }`}
          >

            <div className="flex items-center gap-3">

              <img
                src="/cashplus.png"
                className="w-12 h-12 object-contain"
              />

              <span className="font-semibold">
                Cash Plus
              </span>

            </div>

            <input
              type="radio"
              checked={paymentMethod === "cashplus"}
              readOnly
            />

          </label>

          {paymentMethod === "cashplus" && (

            <div className="bg-[#f8f8f8] rounded-2xl p-5 mb-5 text-right">

              <h3 className="font-bold text-lg mb-4">
                معلومات Cash Plus
              </h3>

              <div className="space-y-3 text-gray-700">

                <p>
                  <span className="font-bold">رقم الهاتف:</span>{" "}
                  0663756621
                </p>

                <p>
                  <span className="font-bold">الإسم الكامل:</span>{" "}
                  Kour mohamed
                </p>

              </div>

              <a
                href="https://wa.me/212663756621"
                target="_blank"
                className="w-full mt-5 bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl font-bold flex items-center justify-center"
              >

                إرسال صورة الوصل عبر واتساب

              </a>

            </div>

          )}

          {/* COD */}

          <label
            onClick={() => setPaymentMethod("cod")}
            className={`border rounded-2xl p-4 flex items-center justify-between cursor-pointer transition ${
              paymentMethod === "cod"
                ? "border-green-600 bg-green-50"
                : "border-gray-200"
            }`}
          >

            <div className="flex items-center gap-3">

              <img
                src="/cod.png"
                className="w-12 h-12 object-contain"
              />

              <span className="font-semibold">
                الدفع عند الاستلام
              </span>

            </div>

            <input
              type="radio"
              checked={paymentMethod === "cod"}
              readOnly
            />

          </label>

          {paymentMethod === "cod" && (

            <div className="bg-[#f8f8f8] rounded-2xl p-5 mt-4 text-right text-sm leading-8 text-gray-700">

              يتم تفعيل خدمة الدفع عند الاستلام للزبائن الذين سبق لهم تأكيد واستلام طلباتهم بنجاح.
              <br />
              أما الزبائن الجدد، فيرجى إتمام الدفع مسبقًا عبر التحويل البنكي أو Cash Plus لتأكيد الطلب.

            </div>

          )}

        </div>

        {/* ORDER SUMMARY */}

        <div className="bg-white rounded-2xl p-5 shadow-md">

          <h2 className="text-xl font-bold mb-6 text-right">

            ملخص الطلب

          </h2>

          <div className="space-y-4 mb-6">

            {cartItems.map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-between border-b pb-3"
              >

                <div className="flex items-center gap-3">

                  <img
                    src={item.image}
                    className="w-16 h-16 object-contain rounded-xl bg-[#f8f8f8]"
                  />

                  <div>

                    <h3 className="font-bold text-sm">

  {item.title || item.name}

</h3>

<p className="text-gray-500 text-xs">

  {item.selectedSize?.label ||
    (item.type === "pack"
      ? "باقة"
      : "1 كيلو")}

</p>

<p className="text-[#2f8f6b] font-bold text-sm">

  {item.selectedSize?.price ||
    item.price ||
    0} د.م

</p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          <div className="flex justify-between mb-4 text-sm">

            <span>
              المجموع الفرعي
            </span>

            <span>
              {subtotal} د.م
            </span>

          </div>

          <div className="flex justify-between mb-4 text-sm">

            <span>
              الشحن
            </span>

            <span className="text-green-600 font-semibold">

              {isPackOnly
                ? "مجاني"
                : city
                ? `${shipping} د.م`
                : "يحسب بعد اختيار المدينة"}

            </span>

          </div>

          <hr className="my-4" />

          <div className="flex justify-between mb-6">

            <span className="font-bold text-lg">

              المجموع

            </span>

            <span className="font-bold text-xl text-[#2f8f6b]">

              {total} د.م

            </span>

          </div>

          <button
            onClick={handleOrder}
            className="w-full bg-[#2f8f6b] hover:bg-[#267456] transition text-white py-4 rounded-xl font-bold"
          >

            تأكيد الطلب

          </button>

        </div>

      </div>

    </main>
  );
}
