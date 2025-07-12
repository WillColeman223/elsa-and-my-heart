import { Calendar, Heart, MapPin, Star } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "March 15, 2023",
    title: "We First Met",
    description: "That magical moment when our eyes first met and time seemed to stand still. I knew you were special from the very beginning.",
    icon: Heart
  },
  {
    date: "March 22, 2023", 
    title: "Our First Date",
    description: "Coffee turned into dinner, dinner turned into a long walk, and that walk turned into the beginning of our beautiful journey together.",
    icon: Calendar
  },
  {
    date: "May 10, 2023",
    title: "First 'I Love You'",
    description: "Under the starlit sky, those three little words changed everything. The moment I knew my heart belonged to you forever.",
    icon: Star
  },
  {
    date: "July 28, 2023",
    title: "Our Adventures Together",
    description: "From spontaneous road trips to quiet movie nights, every moment with you has been an adventure I treasure in my heart.",
    icon: MapPin
  }
];

export const StoryTimeline = () => {
  return (
    <section id="story-timeline" className="py-20 px-4 bg-gradient-to-b from-background to-romance-cream/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary font-script">Love Story</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every love story is beautiful, but ours is my favorite. Here are the moments that brought us together.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/20"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className="relative timeline-item animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline icon */}
              <div className="absolute left-0 md:left-4 top-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                <event.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <div className="ml-12 md:ml-20 bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-romantic transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="text-sm text-accent-gold font-medium mb-2">{event.date}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};