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
    
  <head>

    <script
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];
          t=b.createElement(e);t.async=!0;
          t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}
          (window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '780685564480517');
          fbq('track', 'PageView');
        `,
      }}
    />
<script
  dangerouslySetInnerHTML={{
    __html: `
      !function (w, d, t) {
        w.TiktokAnalyticsObject=t;
        var ttq=w[t]=w[t]||[];
        ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
        ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
        ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
        ttq.load=function(e,n){
          var r="https://analytics.tiktok.com/i18n/pixel/events.js",
          o=n&&n.partner;
          ttq._i=ttq._i||{};
          ttq._i[e]=[];
          ttq._i[e]._u=r;
          ttq._t=ttq._t||{};
          ttq._t[e]=+new Date;
          ttq._o=ttq._o||{};
          ttq._o[e]=n||{};
          n=document.createElement("script");
          n.type="text/javascript";
          n.async=!0;
          n.src=r+"?sdkid="+e+"&lib="+t;
          e=document.getElementsByTagName("script")[0];
          e.parentNode.insertBefore(n,e);
        };

        ttq.load('D8SHAR3C77U2T659NUOG');
        ttq.page();
      }(window, document, 'ttq');
    `,
  }}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:6713346,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');
          r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `,
  }}
/>
  </head>


      <body className="bg-[#f3ebdf]">
        <noscript>
  <img
    height="1"
    width="1"
    style={{ display: "none" }}
    src="https://www.facebook.com/tr?id=780685564480517&ev=PageView&noscript=1"
  />
</noscript>


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
