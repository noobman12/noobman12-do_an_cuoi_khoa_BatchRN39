import Banner from "@/components/Banner";
import ShopProducts from "../components/ShopProducts";
function shop() {
  return (
    <div>
      <Banner bannerTitle='Collection' bannerUrl='HOME/ BEST SELLING' />
      <ShopProducts />
    </div>
  );
}

export default shop;
