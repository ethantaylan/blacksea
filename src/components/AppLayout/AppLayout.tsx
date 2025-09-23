import { Hero } from "../Hero/Hero";
import { Navbar } from "../Navbar/Navbar";

export default function AppLayout() {
  return (
    <main className="min-h-dvh p-4 bg-white">
      <div className="container mx-auto">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
