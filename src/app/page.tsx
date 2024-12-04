import BuyManWoman from "@/components/HomeSections/BuyManWoman";
import Hero from "@/components/HomeSections/Hero";
import HoodieTrouser from "@/components/HomeSections/HoodieTrouser";
import { InfiniteMovingCardsDemo } from "@/components/HomeSections/MovingCards";

export default function Home() {
  return (
    <div>
      <Hero />
      <HoodieTrouser />
      <BuyManWoman />
      <InfiniteMovingCardsDemo />
    </div>
  );
}
