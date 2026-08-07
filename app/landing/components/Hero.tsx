import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* صورة الباقة */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/hero.webp"
            alt="باقة الأزهار"
            width={1400}
            height={900}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* معلومات الباقة */}
        <div className="mt-8">

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
  باقة الأزهار
</h1>


          <div className="flex items-center gap-3 mt-4">
            <div className="flex text-yellow-500 text-2xl">
              ★★★★★
            </div>

            <span className="text-gray-600 font-semibold">
              5.0 (57 تقييم)
            </span>
          </div>

          <div className="mt-6 flex items-center gap-3 flex-wrap">

  <span className="text-5xl font-black text-green-700">
    550 د.م
  </span>

  <span className="text-2xl text-gray-400 line-through">
    705 د.م
  </span>

  <span className="bg-red-500 text-white font-bold px-3 py-1 rounded-full">
    وفر 155 د.م
  </span>

</div>


          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
            <span className="w-3 h-3 rounded-full bg-green-600"></span>

            <span className="font-bold text-green-700">
              متوفر في المخزون
            </span>
          </div>
          {/* اختيار الكمية */}
<div className="mt-8 max-w-md">

  <div className="flex items-center justify-between border-2 border-gray-200 rounded-2xl overflow-hidden">

    <button className="w-16 h-14 text-3xl font-bold hover:bg-gray-100 transition">
      -
    </button>

    <span className="text-2xl font-bold">
      1
    </span>

    <button className="w-16 h-14 text-3xl font-bold hover:bg-gray-100 transition">
      +
    </button>

  </div>

</div>

{/* زر الطلب */}
<div className="mt-6 max-w-md">

  <button
    className="
      w-full
      h-16
      rounded-2xl
      bg-lime-500
      hover:bg-lime-600
      text-white
      text-2xl
      font-black
      transition-all
      duration-300
      animate-pulse
    "
  >
    اطلب الآن
  </button>

</div>
<p className="text-center text-gray-500 mt-3 text-sm">
  🚚 التوصيل لجميع المدن المغربية خلال 24 إلى 72 ساعة
</p>

        </div>

      </div>
    </section>
  );
}
