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

    </footer>
  );
}
