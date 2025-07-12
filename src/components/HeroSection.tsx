import { useState, useEffect } from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '@/assets/hero-background.jpg';

interface CountdownType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const HeroSection = () => {
  const [countdown, setCountdown] = useState<CountdownType>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-07-28T00:00:00');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToStory = () => {
    document.getElementById('story-timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-romance-white/20 via-romance-pink-light/30 to-romance-cream/40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 drop-shadow-lg">
            To My Love, <span className="text-primary font-script">Elsa</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-light">
            Counting down to our anniversary
          </p>

          {/* Mini countdown */}
          <div className="flex justify-center gap-4 md:gap-8 mb-12">
            {Object.entries(countdown).map(([unit, value]) => (
              <div key={unit} className="text-center bg-romance-white/80 backdrop-blur-sm rounded-lg p-4 shadow-soft">
                <div className="text-2xl md:text-3xl font-bold text-primary">{value}</div>
                <div className="text-sm text-muted-foreground capitalize">{unit}</div>
              </div>
            ))}
          </div>

          <Button 
            onClick={scrollToStory}
            className="btn-heart group animate-float"
            size="lg"
          >
            <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Scroll Down to Our Story
            <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};