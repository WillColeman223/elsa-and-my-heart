import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

// Placeholder images - these can be easily replaced
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&q=80",
    caption: "Our first adventure together"
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", 
    caption: "Cozy moments at home"
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&q=80",
    caption: "That magical evening walk"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    caption: "By the lake where we shared our dreams"
  },
  {
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&q=80",
    caption: "Under the stars, just you and me"
  },
  {
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
    caption: "Every moment with you is beautiful"
  }
];

export const PhotoGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary font-script">Memories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of precious moments we've shared together. Each photo tells a story of our love.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-soft hover:shadow-romantic transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src}
                alt={image.caption}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-medium bg-black/50 backdrop-blur-sm rounded-lg p-3">
                  {galleryImages[currentImage].caption}
                </p>
              </div>

              {/* Navigation */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};