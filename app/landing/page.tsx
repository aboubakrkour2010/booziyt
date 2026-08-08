export default function LandingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4">

      <h1 className="text-4xl font-black text-center mt-10">
        TEST LANDING PAGE
      </h1>

      {/* محتويات الباقة */}
      <section className="mt-10 bg-gray-50 p-6 rounded-3xl space-y-5">

        {/* أملو */}
        <div className="bg-white p-4 rounded-xl flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img src="/amlou1.webp" className="w-20 h-20 rounded-xl" />
            <div>
              <h3 className="font-bold">أملو باللوز</h3>
              <p>700 غرام</p>
              <p className="text-green-700 font-bold">160 د.م</p>
            </div>
          </div>
          <a href="/product/amlou-almond">عرض</a>
        </div>

        {/* زيت أركان */}
        <div className="bg-white p-4 rounded-xl flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img src="/oil1.png" className="w-20 h-20 rounded-xl" />
            <div>
              <h3 className="font-bold">زيت أركان</h3>
              <p>250 مل</p>
              <p className="text-green-700 font-bold">150 د.م</p>
            </div>
          </div>
          <a href="/oil">عرض</a>
        </div>

      </section>

    </main>
  );
}
