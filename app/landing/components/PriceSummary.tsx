export default function PriceSummary() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-10">

      <div className="bg-white rounded-3xl shadow-xl p-8 border">

        <h2 className="text-3xl font-black text-center mb-8">
          💰 قيمة العرض
        </h2>

        <div className="space-y-5 text-xl">

          <div className="flex justify-between">
            <span>قيمة المنتجات الأصلية</span>
            <span className="font-bold">670 د.م</span>
          </div>

          <div className="flex justify-between">
            <span>رسوم التوصيل</span>
            <span className="font-bold">35 د.م</span>
          </div>

          <hr />

          <div className="flex justify-between text-2xl">
            <span className="font-black">
              المجموع
            </span>

            <span className="font-black text-red-600">
              705 د.م
            </span>
          </div>

          <div className="flex justify-between text-3xl mt-8">

            <span className="font-black">
              سعر الباقة
            </span>

            <span className="font-black text-green-600">
              550 د.م
            </span>

          </div>

          <div className="bg-lime-100 rounded-2xl mt-8 p-5 text-center">

            <div className="text-2xl font-black text-lime-700">
              🎉 وفرت 155 د.م
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
