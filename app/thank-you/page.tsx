export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#f3ebdf] flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl shadow-lg p-10 max-w-lg w-full text-center">

        <div className="text-6xl mb-6">
          ✅
        </div>

        <h1 className="text-3xl font-bold mb-4 text-[#2f8f6b]">

          شكراً على طلبك

        </h1>

        <p className="text-gray-700 text-lg leading-8 mb-8">

          تم إرسال طلبك بنجاح ❤️

          <br />

          سنتواصل معك قريباً لتأكيد الطلب.

        </p>

        <a
          href="/"
          className="inline-block bg-[#2f8f6b] text-white px-8 py-4 rounded-2xl font-bold"
        >

          الرجوع للرئيسية

        </a>

      </div>

    </main>
  );
}
