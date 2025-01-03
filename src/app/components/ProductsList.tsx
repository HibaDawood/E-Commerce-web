import Link from "next/link";
import Image from "next/image";
import { products } from "../data/products";

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 mx-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-myPink/15 rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <div className="relative">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={600}
              className="w-full h-72"
            />
            {product.discount > 0 && (
              <span
                className="absolute top-2 right-2 bg-myPink text-myWhite text-base font-bold
               rounded-full px-4 py-2"
              >
                {product.discount}% OFF
              </span>
            )}
          </div>
          <div className="p-4 flex-grow">
            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold">
                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
              </p>
              {product.discount > 0 && (
                <p className="text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </p>
              )}
            </div>
          </div>
          <div className="p-4">
            <Link
              href={`/products/${product.id}`}
              className="block w-full text-center bg-myPink
             hover:bg-myPink/75 text-white font-bold py-2 px-4 rounded"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
