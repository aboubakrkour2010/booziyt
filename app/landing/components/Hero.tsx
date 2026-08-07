import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-6xl mx-auto px-4">

        {/* صورة الباقة */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/hero.webp"
            alt="باقة الزهور"
            width={1200}
            height={1200}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-8">

  {/* اسم الباقة */}
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
    باقة الزهور الطبيعية
  </h1>

  {/* النجوم */}
  <div className="flex items-center gap-2 mt-4">

    <div className="flex text-yellow-400 text-2xl">
      ⭐⭐⭐⭐⭐
    </div>

    <span className="text-gray-600 font-semibold">
      5.0 (57 تقييم)
    </span>

  </div>

  {/* الثمن */}
  <div className="mt-6 flex items-center gap-4 flex-wrap">

    <span className="text-5xl font-extrabold text-green-700">
      510 د.م
    </span>

    <span className="text-2xl text-gray-400 line-through">
      580 د.م
    </span>

    <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold">
      وفر 70 د.م
    </span>

  </div>

  {/* المخزون */}
  <div className="mt-5 inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">

    ✅ متوفر في المخزون

  </div>

</div>


      </div>
    </section>
  );
}
