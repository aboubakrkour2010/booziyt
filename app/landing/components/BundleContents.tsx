export default function BundleContents() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-10">

      <h2 className="text-3xl font-black text-center mb-8">
        📦 محتويات الباقة (5 منتجات)
      </h2>

      <div className="bg-gray-50 rounded-3xl p-6">
        <div className="space-y-5">

          {/* أملو */}
          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/amlou1.webp" className="w-24 h-24 rounded-xl object-cover" />
              <div>
                <h3 className="text-xl font-black">أملو باللوز</h3>
                <p className="text-gray-500 mt-1">700 غرام</p>
                <p className="text-green-700 font-black mt-2">160 د.م</p>
              </div>
            </div>
            <a href="/product/amlou-almond" className="bg-green-100 hover:bg-green-200 px-5 py-2 rounded-xl font-bold">
              عرض المنتج
            </a>
          </div>

          {/* زيت أركان */}
          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/oil1.png" className="w-24 h-24 rounded-xl object-cover" />
              <div>
                <h3 className="text-xl font-black">زيت أركان للأكل</h3>
                <p className="text-gray-500 mt-1">250 مل</p>
                <p className="text-green-700 font-black mt-2">150 د.م</p>
              </div>
            </div>
            <a href="/oil" className="bg-green-100 hover:bg-green-200 px-5 py-2 rounded-xl font-bold">
              عرض المنتج
            </a>
          </div>

          {/* عسل الكالبتوس */}
          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/honey6.webp" className="w-24 h-24 rounded-xl object-cover" />
              <div>
                <h3 className="text-xl font-black">عسل الكالبتوس</h3>
                <p className="text-gray-500 mt-1">1 كيلو</p>
                <p className="text-green-700 font-black mt-2">200 د.م</p>
              </div>
            </div>
            <a href="/honey/eucalyptus-honey" className="bg-green-100 hover:bg-green-200 px-5 py-2 rounded-xl font-bold">
              عرض المنتج
            </a>
          </div>

          {/* عسل الأزهار */}
          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/flowers-pack.webp" className="w-24 h-24 rounded-xl object-cover" />
              <div>
                <h3 className="text-xl font-black">عسل الأزهار</h3>
                <p className="text-gray-500 mt-1">1 كيلو</p>
                <p className="text-green-700 font-black mt-2">120 د.م</p>
              </div>
            </div>
            <a href="/honey/flowers-honey" className="bg-green-100 hover:bg-green-200 px-5 py-2 rounded-xl font-bold">
              عرض المنتج
            </a>
          </div>

          {/* خل التفاح (هدية) */}
          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/oil4.png" className="w-24 h-24 rounded-xl object-cover" />
              <div>
                <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                  🎁 هدية
                </span>
                <h3 className="text-xl font-black mt-2">خل التفاح</h3>
                <p className="text-gray-500 mt-1">250 مل</p>
                <p className="text-gray-400 line-through">40 د.م</p>
                <p className="text-lime-700 font-black">مجانًا</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
