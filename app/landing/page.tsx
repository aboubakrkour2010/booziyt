import Hero from "./components/Hero";
import ProductDescription from "./components/ProductDescription";
import BundleContents from "./components/BundleContents";
import PriceSummary from "./components/PriceSummary";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import OrderForm from "./components/OrderForm";
import StickyOrder from "./components/StickyOrder";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <ProductDescription />
      <BundleContents />
      <PriceSummary />
      <Benefits />
      <Reviews />
      <FAQ />
      <OrderForm />
      <StickyOrder />
    </main>
  );
}