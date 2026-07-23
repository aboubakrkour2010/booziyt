import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/data/footer";

import {
  Truck,
  Leaf,
  Users,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#0F3D2E] text-white">

      {/* الشريط العلوي */}
      <div className="border-y border-[#C8A44D]/30 bg-[#0B3428]">
        <div className="mx-auto max-w-7xl px-6 py-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* التوصيل */}
            <div className="flex items-center justify-center gap-4">

              <Truck
                size={34}
                className="text-[#D4AF37]"
              />

              <div className="text-right">

                <h3 className="font-bold text-lg">
                  التوصيل لجميع المدن المغربية
                </h3>

                <p className="text-gray-300 text-sm">
                  خلال 24 إلى 72 ساعة
                </p>

              </div>

            </div>

            {/* المنتجات */}

            <div className="flex items-center justify-center gap-4">

              <Leaf
                size={34}
                className="text-[#D4AF37]"
              />

              <div className="text-right">

                <h3 className="font-bold text-lg">
                  منتجات طبيعية
                </h3>

                <p className="text-gray-300 text-sm">
                  من محلنا، ضيعاتنا ومناحلنا
                </p>

              </div>

            </div>

            {/* العملاء */}

            <div className="flex items-center justify-center gap-4">

              <Users
                size={34}
                className="text-[#D4AF37]"
              />

              <div className="text-right">

                <h3 className="font-bold text-lg">
                  +2100 زبون راضٍ
                </h3>

                <p className="text-gray-300 text-sm">
                  ثقتكم هي سر نجاحنا
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>

    {/* Main Footer */}
<section className="bg-[#062b1f] relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Boo Ziyt */}
      <div>
        <h2 className="text-5xl font-serif text-[#d4af37] mb-3">
          Boo Ziyt
        </h2>

        <p className="text-[#d4af37] text-lg mb-6">
          منتجات طبيعية أصيلة
        </p>

        <p className="text-white/80 leading-8">
          منتجات طبيعية من محلاتنا ومناحلنا، نحرص على تقديم الجودة
          والأصالة مع خدمة موثوقة لزبنائنا في جميع أنحاء المغرب.
        </p>
      </div>

      {/* Links */}
      <div>
        <h3 className="text-3xl font-bold text-[#d4af37] mb-8">
          روابط مهمة
        </h3>

        <div className="space-y-4">
          <Link href="/about">من نحن</Link><br />
          <Link href="/shipping">سياسة الشحن</Link><br />
          <Link href="/returns">سياسة الاستبدال والاسترجاع</Link><br />
          <Link href="/privacy">سياسة الخصوصية</Link><br />
          <Link href="/terms">شروط الاستخدام</Link>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-3xl font-bold text-[#d4af37] mb-8">
          خدمة الزبناء
        </h3>

        <div className="space-y-5 text-white">
          <p>📍 أكادير، المغرب</p>
          <p>📞 0663756637</p>
          <p>🟢 واتساب: 0663756637</p>
          <p>✉️ booziyt1@gmail.com</p>
        </div>
      </div>

      {/* Payment */}
      <div>
        <h3 className="text-3xl font-bold text-[#d4af37] mb-8">
          طرق الدفع
        </h3>

        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 text-center">
            الدفع عند الاستلام
          </div>

          <div className="bg-white rounded-xl p-4 text-center">
            التحويل البنكي
          </div>

          <div className="bg-white rounded-xl p-4 text-center">
            Cash Plus
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

    </footer>
  );
}
