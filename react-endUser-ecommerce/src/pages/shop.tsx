import PageBanner from "../components/PageBanner";
import ShopProducts from "../components/ShopProducts";
function shop() {
  return (
    <div>
      <PageBanner pageName="Collection" urlPage="HOME/ BEST SELLING" />
      <ShopProducts />
    </div>
  );
}

export default shop;
