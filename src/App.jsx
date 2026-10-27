import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FloatingConnect from "./components/FloatingConnect";
import StatementSection from "./components/StatementSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <div className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 z-0 h-40 w-[85%] -translate-x-1/2 rounded-full bg-white/20 blur-[70px]" />

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <StatementSection />
          <WorkSection />
          <AboutSection />

          <FloatingConnect />
        </div>
      </div>
    </main>
  );
}

export default App;
