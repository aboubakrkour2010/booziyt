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
    670 د.م
  </span>

  <span className="bg-red-500 text-white font-bold px-3 py-1 rounded-full">
    وفر 120 د.م
  </span>

</div>

          <p className="mt-2 text-gray-600">
            🚚 شامل التوصيل إلى جميع المدن المغربية
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
            <span className="w-3 h-3 rounded-full bg-green-600"></span>

            <span className="font-bold text-green-700">
              متوفر في المخزون
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
