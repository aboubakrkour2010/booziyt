"use client";

import { useState } from "react";

const prices = {
  1: 45,
  5: 225,
};

export default function OliveSeasonPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const [quantity, setQuantity] = useState(5);
  const [deliveryType, setDeliveryType] = useState<"delivery" | "shop">(
    "delivery"
  );

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const pricePerLiter = 45;
  const total = quantity * pricePerLiter;

  const paymentMethod =
    city.trim() === "أكادير" ? "الدفع عند الاستلام" : "الدفع قبل الإرسال";

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleOrder = async () => {
    if (!name || !phone || !city) {
      alert("المرجو ملئ جميع المعلومات");
      return;
    }

    if (deliveryType === "delivery" && !address) {
      alert("المرجو إدخال العنوان");
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
          address,
          quantity,
          total,
          deliveryType,
          paymentMethod,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setOrderNumber(data.orderNumber || "");
        setSuccess(true);
      } else {
        alert("وقع مشكل أثناء إرسال الطلب");
      }
    } catch (error) {
      console.error(error);
      alert("خطأ في الإرسال");
    } finally {
      setLoading(false);
    }
  };

  return (
  <main
    dir="rtl"
    className="relative min-h-screen overflow-hidden text-white"
  >

    {/* الخلفية الثابتة */}
    <div
      className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/olive-background.jpg')",
      }}
    />

    {/* طبقة شفافة فوق الخلفية */}
    <div className="fixed inset-0 z-0 bg-black/45" />

    {/* محتوى الصفحة */}
    <div className="relative z-10">

      {/* المحتوى غادي نزيدوه هنا بالتدريج */}
      <div className="relative min-h-screen overflow-hidden bg-[#101810]">

  {/* خلفية طبيعية */}
  <div className="pointer-events-none absolute inset-0 opacity-20">
    <div className="absolute -left-20 top-20 text-[120px]">🌿</div>
    <div className="absolute right-[-30px] top-80 text-[100px]">🌿</div>
    <div className="absolute bottom-20 left-10 text-[90px]">🫒</div>
    <div className="absolute bottom-40 right-20 text-[80px]">🫒</div>
  </div>

  <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-8">

    {/* اللوغو */}
    <div className="flex justify-center">
      <div className="animate-pulse text-center">
        <div className="text-4xl font-black tracking-wide text-[#f3e5bc] md:text-6xl">
          Boo Ziyt
        </div>
      </div>
    </div>

    {/* العنوان */}
    <div className="mt-12 text-center">
      <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
        زيت الزيتون البلدية
      </h1>
    </div>

    {/* صورة الزيت */}
    <div className="mx-auto mt-8 max-w-xl">
      <div className="flex h-[300px] items-center justify-center md:h-[430px]">
        <img
  src="/ziyt.png"
  alt="Boo Ziyt"
  className="h-full w-full object-contain drop-shadow-2xl"
/>
      </div>
    </div>

    {/* الأثمنة */}
    <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3">

      <div className="rounded-2xl border border-[#d8bb63]/40 bg-white/10 px-3 py-4 text-center backdrop-blur-md">
        <div className="text-xl font-black text-white md:text-2xl">
          1 لتر
        </div>

        <div className="mt-1 text-lg font-black text-[#d8bb63] md:text-xl">
          45 درهم
        </div>
      </div>

      <div className="rounded-2xl border border-[#d8bb63]/40 bg-white/10 px-3 py-4 text-center backdrop-blur-md">
        <div className="text-xl font-black text-white md:text-2xl">
          5 لتر
        </div>

        <div className="mt-1 text-lg font-black text-[#d8bb63] md:text-xl">
          225 درهم
        </div>
      </div>

    </div>

    {/* باقي الصفحة غادي يجي هنا */}
    {/* معلومات الزيت */}
<section className="mx-auto mt-12 max-w-4xl">

  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

    <div className="rounded-2xl border border-[#d8bb63]/30 bg-white/5 p-4 text-center backdrop-blur-md">
      <div className="text-2xl">🌿</div>

      <h3 className="mt-2 text-sm font-black text-white">
        المصدر
      </h3>

      <p className="mt-1 text-xs text-[#d8bb63]">
        منطقة العطاوية
      </p>
    </div>

    <div className="rounded-2xl border border-[#d8bb63]/30 bg-white/5 p-4 text-center backdrop-blur-md">
      <div className="text-2xl">🫒</div>

      <h3 className="mt-2 text-sm font-black text-white">
        النوع
      </h3>

      <p className="mt-1 text-xs text-[#d8bb63]">
        زيت بلدية
      </p>
    </div>

    <div className="rounded-2xl border border-[#d8bb63]/30 bg-white/5 p-4 text-center backdrop-blur-md">
      <div className="text-2xl">⚙️</div>

      <h3 className="mt-2 text-sm font-black text-white">
        طريقة الطحن
      </h3>

      <p className="mt-1 text-xs text-[#d8bb63]">
        مطحونة بالحجرة
      </p>
    </div>

    <div className="rounded-2xl border border-[#d8bb63]/30 bg-white/5 p-4 text-center backdrop-blur-md">
      <div className="text-2xl">❄️</div>

      <h3 className="mt-2 text-sm font-black text-white">
        طريقة الاستخراج
      </h3>

      <p className="mt-1 text-xs text-[#d8bb63]">
        على البارد
      </p>
    </div>

  </div>
</section>

{/* الدفعة وحالة الموسم */}
<section className="mx-auto mt-8 max-w-4xl">

  <div className="grid grid-cols-2 gap-3">

    <div className="rounded-2xl border border-[#d8bb63]/30 bg-white/5 p-5 text-center backdrop-blur-md">
      <p className="text-xs text-[#d8bb63]">
        رقم الدفعة
      </p>

      <div className="mt-2 text-2xl font-black text-white">
  الدفعة 17
</div>

      <p className="mt-2 text-xs text-white/60">
        الموسم الجديد قريب
      </p>
    </div>

    <div className="rounded-2xl border border-[#d8bb63]/30 bg-white/5 p-5 text-center backdrop-blur-md">
      <p className="text-xs text-[#d8bb63]">
        حالة الموسم
      </p>

      <div className="mt-2 flex items-center justify-center gap-2 text-xl font-black text-white">
        <span className="h-3 w-3 rounded-full bg-[#d8bb63]" />
        التسجيل مفتوح
      </div>
    </div>

  </div>

</section>

{/* طريقة الأداء */}
<section className="mx-auto mt-8 max-w-4xl">

  <div className="rounded-3xl border border-[#d8bb63]/30 bg-white/5 p-6 backdrop-blur-md">

    <h2 className="text-center text-2xl font-black text-white">
      طريقة الأداء
    </h2>

    <div className="mt-6 grid gap-4 md:grid-cols-2">

      <div className="rounded-2xl border border-white/10 bg-black/10 p-5 text-right">
        <div className="flex items-center gap-2">
          <span className="text-xl">📍</span>

          <h3 className="font-black text-white">
            مدينة أكادير
          </h3>
        </div>

        <p className="mt-3 text-sm leading-7 text-white/70">
          الدفع عند الاستلام.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/10 p-5 text-right">
        <div className="flex items-center gap-2">
          <span className="text-xl">👤</span>

          <h3 className="font-black text-white">
            الزبون السابق
          </h3>
        </div>

        <p className="mt-3 text-sm leading-7 text-white/70">
          الدفع عند الاستلام.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/10 p-5 text-right md:col-span-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">📦</span>

          <h3 className="font-black text-white">
            المدن الأخرى
          </h3>
        </div>

        <p className="mt-3 text-sm leading-7 text-white/70">
          الدفع قبل الإرسال.
        </p>
      </div>

    </div>

  </div>

</section>

  </div>
</div>
{/* فورم الطلب */}
<section className="relative mx-3 mt-12 max-w-3xl sm:mx-auto">
  
  <div className="relative overflow-hidden rounded-[32px] border border-[#d8bb63]/40 bg-white/5 p-5 shadow-2xl backdrop-blur-md md:p-8">

    {/* أغصان الزيتون */}
    <div className="pointer-events-none absolute -left-5 -top-5 rotate-[-20deg] text-5xl opacity-80">
      🌿
    </div>

    <div className="pointer-events-none absolute -right-5 -top-5 rotate-[20deg] text-5xl opacity-80">
      🌿
    </div>

    <div className="pointer-events-none absolute -bottom-5 -left-5 rotate-[20deg] text-5xl opacity-80">
      🌿
    </div>

    <div className="pointer-events-none absolute -bottom-5 -right-5 rotate-[-20deg] text-5xl opacity-80">
      🌿
    </div>

    <div className="pointer-events-none absolute left-8 top-14 text-xl opacity-70">
      🫒
    </div>

    <div className="pointer-events-none absolute right-8 top-14 text-xl opacity-70">
      🫒
    </div>

    <div className="pointer-events-none absolute bottom-14 left-8 text-xl opacity-70">
      🫒
    </div>

    <div className="pointer-events-none absolute bottom-14 right-8 text-xl opacity-70">
      🫒
    </div>

    <div className="relative z-10">

      <div className="text-center">
        <h2 className="text-3xl font-black text-white md:text-4xl">
          تسجيل الطلب
        </h2>
      </div>

      {/* المعلومات الشخصية */}
      <div className="mt-8 space-y-5">

        {/* الاسم */}
        <div>
          <label className="mb-2 block text-right text-sm font-bold text-white">
            الاسم الكامل
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="الاسم الكامل"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-right text-white outline-none placeholder:text-white/40 focus:border-[#d8bb63]"
          />
        </div>

        {/* الهاتف */}
        <div>
          <label className="mb-2 block text-right text-sm font-bold text-white">
            رقم الهاتف
          </label>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="رقم الهاتف"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-right text-white outline-none placeholder:text-white/40 focus:border-[#d8bb63]"
          />
        </div>

        {/* المدينة */}
        <div>
          <label className="mb-2 block text-right text-sm font-bold text-white">
            المدينة
          </label>

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="المدينة"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-right text-white outline-none placeholder:text-white/40 focus:border-[#d8bb63]"
          />
        </div>

        {/* العنوان */}
        {deliveryType === "delivery" && (
          <div>
            <label className="mb-2 block text-right text-sm font-bold text-white">
              العنوان
            </label>

            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="العنوان"
              rows={3}
              className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-right text-white outline-none placeholder:text-white/40 focus:border-[#d8bb63]"
            />
          </div>
        )}

      </div>

      {/* الكمية */}
<div className="mt-8">

  <h3 className="text-right text-sm font-bold text-white">
    الكمية
  </h3>

  <div className="mt-4 flex items-center justify-center gap-5">

    <button
      type="button"
      onClick={() => setQuantity((prev) => Math.max(5, prev - 5))}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8bb63]/50 bg-white/5 text-xl font-bold text-[#d8bb63]"
    >
      −
    </button>

    <div className="min-w-[110px] text-center">
      <div className="text-3xl font-black text-white">
        {quantity}
      </div>

      <div className="text-xs text-white/60">
        لتر
      </div>
    </div>

    <button
      type="button"
      onClick={() => setQuantity((prev) => prev + 5)}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8bb63]/50 bg-white/5 text-xl font-bold text-[#d8bb63]"
    >
      +
    </button>

  </div>

</div>

      {/* طريقة الاستلام */}
      <div className="mt-8">

        <h3 className="text-right text-sm font-bold text-white">
          طريقة الاستلام
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-3">

          <button
            type="button"
            onClick={() => setDeliveryType("delivery")}
            className={`rounded-2xl border p-4 text-center transition ${
              deliveryType === "delivery"
                ? "border-[#d8bb63] bg-[#d8bb63]/15"
                : "border-white/10 bg-black/20"
            }`}
          >
            <div className="text-2xl">🚚</div>

            <div className="mt-2 text-sm font-bold text-white">
              التوصيل
            </div>
          </button>

          <button
            type="button"
            onClick={() => setDeliveryType("shop")}
            className={`rounded-2xl border p-4 text-center transition ${
              deliveryType === "shop"
                ? "border-[#d8bb63] bg-[#d8bb63]/15"
                : "border-white/10 bg-black/20"
            }`}
          >
            <div className="text-2xl">🏪</div>

            <div className="mt-2 text-sm font-bold text-white">
              الاستلام من المحل
            </div>
          </button>

        </div>

      </div>

      {/* المجموع */}
      <div className="mt-8 rounded-2xl border border-[#d8bb63]/30 bg-black/20 p-5">

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-white/70">
            المجموع
          </span>

          <span className="text-2xl font-black text-[#d8bb63]">
            {total} درهم
          </span>
        </div>

      </div>

      {/* طريقة الأداء حسب المدينة */}
      <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5 text-right">

        <div className="text-sm font-bold text-white">
          طريقة الأداء
        </div>

        <div className="mt-2 text-sm leading-7 text-white/70">
          {paymentMethod}
        </div>

      </div>

      {/* زر التأكيد */}
      <button
        type="button"
        onClick={handleOrder}
        disabled={loading}
        className="mt-6 w-full rounded-2xl bg-[#d8bb63] px-5 py-4 text-lg font-black text-black transition hover:scale-[1.01] hover:bg-[#e5ca78] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "جاري إرسال الطلب..." : "تأكيد الطلب 🫒"}
      </button>

    </div>
  </div>
</section>
</div>
    </main>
  );
}
