"use client";

import Hero from "@/components/Hero";
import WelcomeLetter from "@/components/WelcomeLetter";
import Itinerary from "@/components/Itinerary";
import Missions from "@/components/Missions";
import VideoMessage from "@/components/VideoMessage";
import GiftReveal from "@/components/GiftReveal";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <WelcomeLetter />
      <Itinerary />
      <Missions />
      <VideoMessage />
      <GiftReveal />
      <Closing />
    </main>
  );
}
