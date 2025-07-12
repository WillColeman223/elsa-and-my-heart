import { Heart } from 'lucide-react';

export const LoveLetter = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-romance-cream/30 via-background to-romance-pink-light/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Heart className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Letter to <span className="text-primary font-script">My Heart</span>
          </h2>
        </div>

        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-romantic animate-slide-up">
          <div className="prose prose-lg max-w-none text-center">
            <p className="font-script text-2xl md:text-3xl text-primary leading-relaxed mb-8">
              "My Dearest Elsa,"
            </p>
            
            <div className="text-lg md:text-xl text-foreground/90 leading-relaxed space-y-6 font-light">
              <p>
                You bring joy and light into my life every single day. From the moment I wake up to the last thought before I sleep, you fill my world with love, laughter, and endless happiness.
              </p>
              
              <p>
                Every adventure we share, every quiet moment we steal, every laugh we exchange – they all weave together to create the most beautiful tapestry of love I could have ever imagined.
              </p>
              
              <p>
                As our anniversary approaches, my heart overflows with gratitude for having you in my life. You are my sunshine on cloudy days, my calm in every storm, and my greatest blessing.
              </p>
              
              <p className="font-script text-2xl text-primary mt-8">
                I can't wait to celebrate our special day together and create countless more memories with you.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="font-script text-xl text-muted-foreground">
                Forever and always yours,
              </p>
              <p className="font-script text-2xl text-primary mt-2">
                [Your Name]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};