import { HeroSection } from "@/components/HeroSection";
import { StoryTimeline } from "@/components/StoryTimeline";
import { PhotoGallery } from "@/components/PhotoGallery";
import { LoveLetter } from "@/components/LoveLetter";
import { CountdownSection } from "@/components/CountdownSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StoryTimeline />
      <PhotoGallery />
      <LoveLetter />
      <CountdownSection />
      <Footer />
    </div>
  );
};

export default Index;
