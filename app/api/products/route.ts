import { products } from "@/data/products";

// المتجر الجديد (public/s/index.html) كيقرا المنتجات من هنا
export async function GET() {
  return Response.json(products);
}
