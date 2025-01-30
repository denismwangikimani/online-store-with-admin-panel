import { type Metadata } from "next";
import ProductItem from "./_components/product-item";
import { getProduct } from "@/lib/apiCalls";
import Footer from "@/components/footer";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const getProducts = await getProduct(params.productId);

  if (!getProducts)
    return {
      title: "House Of Kimani Store",
      description: "E-ecommerce, selling products, and new productivity",
    };

  return {
    title: `${getProducts.title} | ${siteConfig.name}`,
    description: getProducts.description,
  };
}

const ProductPage = () => {
  return (
    <div>
      <ProductItem />
      <Footer />
    </div>
  );
};

export default ProductPage;