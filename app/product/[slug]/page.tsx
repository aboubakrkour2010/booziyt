import { products } from "../../../data/products";

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {

  const product = products.find(
    (item) => item.slug === params.slug
  );

  if (!product) {
    return <div>المنتج غير موجود</div>;
  }

  return (
    <div className="p-5">

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-2xl"
          />
        </div>

        <div>

          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-2xl font-semibold mb-6">
            {product.price} MAD
          </p>

          <div className="flex gap-3 mb-6 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size.label}
                className="border px-4 py-2 rounded-xl"
              >
                {size.label} - {size.price}dh
              </button>
            ))}
          </div>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-2xl">
            Ajouter au panier
          </button>

        </div>

      </div>

    </div>
  );
}
