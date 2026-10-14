import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WorkspacePreview from "@/components/WorkspacePreview";
import FormsLab from "@/components/FormsLab";
import TrustSection from "@/components/TrustSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <HowItWorks />
        <Features />
        <WorkspacePreview />
        <FormsLab />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
