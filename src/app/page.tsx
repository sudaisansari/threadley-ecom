import BuyManWoman from "@/components/HomeSections/BuyManWoman";
import Hero from "@/components/HomeSections/Hero";
import Hoodies from "@/components/HomeSections/Hoodies";
import { InfiniteMovingCardsDemo } from "@/components/HomeSections/MovingCards";

export default function Home() {
  return (
    <div>
      <Hero />
      <Hoodies />
      <BuyManWoman />
      <InfiniteMovingCardsDemo />
    </div>
  );
}
