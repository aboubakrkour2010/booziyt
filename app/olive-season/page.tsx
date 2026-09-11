"use client";

import { useEffect, useState } from "react";

const images = ["/olive.webp"];

export default function OliveSeasonPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setImageVisible(false);

      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setImageVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#172719] text-white"
    >
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-8 md:px-10">
        <div className="flex justify-center">
          <div className="text-center">
            <div className="text-4xl font-black text-[#f3e5bc] md:text-6xl">
              Boo Ziyt
            </div>

            <div className="mt-2 text-sm text-[#b9c89b]">
              زيت الزيتون
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#c8b56e]">
            موسم زيت الزيتون
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#fffaf0] md:text-6xl">
            زيت الزيتون البلدية
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#d1dac7]">
            زيت زيتون من منطقة العطاوية، بلدية، مطحونة بالحجرة وعلى البارد.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-2xl">
          <div
            className={`relative mx-auto flex h-[380px] items-center justify-center transition-all duration-500 md:h-[500px] ${
              imageVisible
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }`}
          >
            <img
              src={images[currentImage]}
              alt="زيت الزيتون Boo Ziyt"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="mt-3 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentImage(index)}
                className={`h-2 rounded-full ${
                  currentImage === index
                    ? "w-8 bg-[#d8bb63]"
                    : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="group rounded-3xl border border-[#d8bb63]/30 bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#d8bb63]/70 hover:bg-white/15">
            <p className="text-sm text-[#c8b56e]">الحجم</p>

            <h2 className="mt-2 text-4xl font-black text-[#fffaf0]">
              1 لتر
            </h2>

            <div className="mt-4 text-3xl font-black text-[#d8bb63]">
              45 <span className="text-lg">درهم</span>
            </div>
          </div>

          <div className="group rounded-3xl border border-[#d8bb63]/30 bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#d8bb63]/70 hover:bg-white/15">
            <p className="text-sm text-[#c8b56e]">الحجم</p>

            <h2 className="mt-2 text-4xl font-black text-[#fffaf0]">
              5 لتر
            </h2>

            <div className="mt-4 text-3xl font-black text-[#d8bb63]">
              225 <span className="text-lg">درهم</span>
            </div>
          </div>
        </div>
                <section className="mt-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold text-[#c8b56e]">
              من أين يأتي زيتنا؟
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#fffaf0] md:text-5xl">
              زيت زيتون بلدية من العطاوية
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#d1dac7] md:text-base">
              زيت زيتون بلدية من منطقة العطاوية، مطحونة بالحجرة وعلى البارد،
              مع الحفاظ على جودة الزيت وطبيعته.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-[#d8bb63]/20 bg-white/10 p-6 text-center backdrop-blur-md">
              <div className="text-3xl">🫒</div>

              <h3 className="mt-3 font-bold text-[#fffaf0]">
                منطقة العطاوية
              </h3>

              <p className="mt-2 text-xs text-[#c8cfc3]">
                مصدر الزيت
              </p>
            </div>

            <div className="rounded-3xl border border-[#d8bb63]/20 bg-white/10 p-6 text-center backdrop-blur-md">
              <div className="text-3xl">🌿</div>

              <h3 className="mt-3 font-bold text-[#fffaf0]">
                بلدية
              </h3>

              <p className="mt-2 text-xs text-[#c8cfc3]">
                زيت زيتون بلدية
              </p>
            </div>

            <div className="rounded-3xl border border-[#d8bb63]/20 bg-white/10 p-6 text-center backdrop-blur-md">
              <div className="text-3xl">⚙️</div>

              <h3 className="mt-3 font-bold text-[#fffaf0]">
                مطحونة بالحجرة
              </h3>

              <p className="mt-2 text-xs text-[#c8cfc3]">
                طريقة الطحن
              </p>
            </div>

            <div className="rounded-3xl border border-[#d8bb63]/20 bg-white/10 p-6 text-center backdrop-blur-md">
              <div className="text-3xl">❄️</div>

              <h3 className="mt-3 font-bold text-[#fffaf0]">
                على البارد
              </h3>

              <p className="mt-2 text-xs text-[#c8cfc3]">
                طريقة الاستخراج
              </p>
            </div>
          </div>
                  <section className="mt-20">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-black text-[#fffaf0] md:text-4xl">
                معلومات الطلب
              </h2>
            </div>

            <div className="mt-8 rounded-3xl border border-[#d8bb63]/20 bg-white/10 p-6 backdrop-blur-md">
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-right text-sm font-bold text-[#fffaf0]">
                    الاسم الكامل
                  </label>

                  <input
                    type="text"
                    placeholder="الاسم الكامل"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right text-white outline-none placeholder:text-white/40 focus:border-[#d8bb63]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-right text-sm font-bold text-[#fffaf0]">
                    رقم الهاتف
                  </label>

                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right text-white outline-none placeholder:text-white/40 focus:border-[#d8bb63]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-right text-sm font-bold text-[#fffaf0]">
                    المدينة
                  </label>

                  <input
                    type="text"
                    placeholder="المدينة"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right text-white outline-none placeholder:text-white/40 focus:border-[#d8bb63]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-right text-sm font-bold text-[#fffaf0]">
                    العنوان
                  </label>

                  <textarea
                    placeholder="العنوان"
                    rows={3}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right text-white outline-none placeholder:text-white/40 focus:border-[#d8bb63]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>
 </section>
    </main>
  );
}
