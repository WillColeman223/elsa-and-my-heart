import { Calendar, Heart, MapPin, Star } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "",
    title: "We First Met",
    description: "We matched on an app, but honestly, we didn't think much of it at the time. Just another swipe, another match - or so we thought.",
    icon: Heart
  },
  {
    date: "", 
    title: "Our First Call",
    description: "Instead of meeting in person, we had our first call. We were both really nervous, but somehow I just knew - you were definitely the one.",
    icon: Calendar
  },
  {
    date: "",
    title: "Our Adventures Together",
    description: "From all our amazing moments to the memories we're still creating, every day with you is a gift. I can't wait to see you on the 23rd of August!",
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
                {event.date && <div className="text-sm text-accent-gold font-medium mb-2">{event.date}</div>}
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