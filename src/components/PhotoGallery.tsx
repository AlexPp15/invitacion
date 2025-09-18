import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';


const PhotoGallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const photos = [
  { src: "boda1.jpeg", alt: "" },
  { src: "boda3.jpeg", alt: "" },
  { src: "boda4.jpeg", alt: "" },
  { src: "boda5.jpeg", alt: "" },
  { src: "boda6.jpeg", alt: "" },
  { src: "boda7.jpeg", alt: "" },
  { src: "boda8.jpeg", alt: "" },
  { src: "boda9.jpeg", alt: "" },
  { src: "boda10.jpeg", alt: "" },
];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl cursive-font font-bold text-primary mb-8 flex items-center justify-center gap-3">
          <Camera className="w-8 h-8" />
          Nuestros momentos especiales
          <Sparkles className="w-8 h-8" />
        </h2>
        
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 romantic-shadow">
          <div className="relative aspect-[4/3] max-w-2xl mx-auto overflow-hidden rounded-2xl">
            <img
              src={photos[currentPhoto].src}
              alt={photos[currentPhoto].alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
              onClick={prevPhoto}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
              onClick={nextPhoto}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPhoto ? 'bg-primary' : 'bg-primary/30'
                }`}
                onClick={() => setCurrentPhoto(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;