import { Heart, Github, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-romance-cream/50 to-background border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Heart className="w-8 h-8 text-primary mx-auto mb-4 animate-pulse" />
          <h3 className="text-2xl font-script text-primary mb-2">
            Elsa & [Your Name]'s Love Story
          </h3>
          <p className="text-muted-foreground">
            A celebration of our journey together
          </p>
        </div>

        {/* Optional social links */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>

        <div className="border-t border-border/30 pt-8">
          <p className="text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 inline text-primary animate-pulse" /> by [Your Name]
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            © 2025 • Celebrating love every day
          </p>
        </div>
      </div>
    </footer>
  );
};