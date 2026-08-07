import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <Image
        src="/hero.webp"
        alt="باقة الزهور"
        fill
        priority
        className="object-contain object-center"
      />

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-3xl text-center px-6 text-white">

          <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
            🌿 منتجات طبيعية 100%
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">
            باقة الزهور الطبيعية
          </h1>

          <p className="text-2xl md:text-3xl text-yellow-400 font-bold mt-6">
            550 درهم فقط
          </p>

          <p className="mt-6 text-lg md:text-xl leading-9 text-gray-100">
            باقة متكاملة تضم أجود منتجاتنا الطبيعية بعناية وجودة عالية،
            مع التوصيل لجميع المدن المغربية والدفع عند الاستلام.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center">

            <a
              href="#order"
              className="bg-orange-600 hover:bg-orange-700 hover:bg-yellow-400 text-black font-bold px-10 py-5 rounded-full text-xl transition"
            >
              اطلب الآن
            </a>

            
          </div>

        </div>
      </div>
    </section>
  );
}
