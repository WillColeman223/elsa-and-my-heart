import { useState, useEffect } from 'react';
import { Calendar, Clock, Heart } from 'lucide-react';

interface CountdownType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection = () => {
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

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in mb-12">
          <Calendar className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Until Our <span className="text-primary font-script">Special Day</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every second brings us closer to celebrating our anniversary together
          </p>
        </div>

        {/* Large countdown display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {Object.entries(countdown).map(([unit, value], index) => (
            <div 
              key={unit} 
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-romantic transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-muted-foreground capitalize font-medium">
                {unit}
              </div>
              
              {/* Animated icons */}
              <div className="mt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                {unit === 'days' && <Calendar className="w-5 h-5 mx-auto text-primary" />}
                {unit === 'hours' && <Clock className="w-5 h-5 mx-auto text-primary" />}
                {unit === 'minutes' && <Clock className="w-5 h-5 mx-auto text-primary" />}
                {unit === 'seconds' && <Heart className="w-5 h-5 mx-auto text-primary animate-pulse" />}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 animate-fade-in">
          <p className="text-xl md:text-2xl font-script text-primary">
            July 28, 2025 ✨
          </p>
          <p className="text-muted-foreground mt-2">
            The day we celebrate our beautiful journey together
          </p>
        </div>
      </div>
    </section>
  );
};