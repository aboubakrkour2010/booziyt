import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Booziyt",
  description: "منتجات طبيعية أصلية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="ar" dir="rtl">

      <body className="bg-[#f3ebdf]">

        <input
          type="checkbox"
          id="menu-toggle"
          className="hidden peer"
        />

        {/* HEADER */}

        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

            {/* LOGO */}

            <Link href="/">

              <img
                src="/logo.png"
                className="h-14 cursor-pointer"
              />

            </Link>

            {/* RIGHT SIDE */}

            <div className="flex items-center gap-3">

              {/* MENU BUTTON */}

              <label
                htmlFor="menu-toggle"
                className="w-11 h-11 rounded-full bg-[#f3ebdf] flex items-center justify-center text-2xl text-black shadow-sm hover:bg-[#e9ddcb] transition cursor-pointer"
              >

                ☰

              </label>

              {/* CART */}

              <button className="relative w-11 h-11 rounded-full bg-[#f3ebdf] text-black flex items-center justify-center text-2xl shadow-sm hover:bg-[#e9ddcb] transition">

                🛒

                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  0
                </span>

              </button>

            </div>

          </div>

        </header>

        {/* OVERLAY */}

        <label
          htmlFor="menu-toggle"
          className="fixed inset-0 bg-black/30 z-40 hidden peer-checked:block"
        ></label>

        {/* MENU */}

        <div className="fixed top-0 right-[-100%] peer-checked:right-0 transition-all duration-300 h-screen w-[85%] bg-white shadow-2xl z-50 p-5 overflow-y-auto">

          {/* TOP */}

          <div className="flex items-center justify-between mb-8">

            <img
              src="/logo.png"
              className="h-12"
            />

            {/* CLOSE */}

            <label
              htmlFor="menu-toggle"
              className="text-4xl text-gray-400 cursor-pointer"
            >

              ×

            </label>

          </div>

          {/* SEARCH */}

          <div className="mb-8">

            <div className="border rounded-xl px-4 py-3 flex items-center justify-between bg-[#faf7f2]">

              <input
                type="text"
                placeholder="أدخل الكلمة الرئيسية للبحث عنها..."
                className="bg-transparent outline-none w-full text-sm"
              />

              <span className="text-xl">
                🔍
              </span>

            </div>

          </div>

          {/* LINKS */}

          <div className="flex flex-col">

            <Link
              href="/"
              className="flex items-center justify-between py-5 border-b text-lg font-semibold"
            >

              الصفحة الرئيسية

              <span>‹</span>

            </Link>

            <div className="py-5 border-b">

              <div className="flex items-center justify-between text-lg font-semibold mb-4">

                التصنيفات

                <span>‹</span>

              </div>

              <div className="flex flex-col gap-4 pr-2 text-gray-700">

                <Link href="/packs">
                  الباقات و العروض
                </Link>

                <Link href="/honey">
                  منتجات العسل
                </Link>

                <Link href="/amlou">
                  منتجات أملو
                </Link>

                <Link href="/oil">
                  منتجات الزيوت
                </Link>

              </div>

            </div>

            <a
              href="https://wa.me/212663756637"
              target="_blank"
              className="flex items-center justify-between py-5 border-b text-lg font-semibold"
            >

              اتصل بنا

              <span>‹</span>

            </a>

          </div>

        </div>

        {/* PAGE CONTENT */}

        <div className="pt-24">

          {children}

        </div>

      </body>

    </html>

  );
}
