import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Heart, Gift, Camera, Sparkles, Crown, Diamond } from 'lucide-react';
import WeddingCountdown from '@/components/WeddingCountdown';
import PhotoGallery from '@/components/PhotoGallery';
import weddingHero from '@/assets/wedding-hero.jpg';

const Index = () => {
  const openMap = (location: string) => {
    window.open(`https://maps.google.com/maps?q=${encodeURIComponent(location)}`, '_blank');
  };

  const openGiftOptions = () => {
    // Aquí puedes poner tu enlace personalizado
    window.open('#', '_blank');
  };

  const openPhotoUpload = () => {
    // Aquí puedes poner tu enlace de Google Drive
    window.open('#', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/boda2.jpeg)` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl cursive-font font-bold mb-4">
               ¡Nos casamos!
            </h1>
            <h2 className="text-4xl md:text-6xl cursive-font font-bold mb-8 bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
              Jaime & Julia
            </h2>
            <div className="animate-bounce">
              <Sparkles className="w-8 h-8 mx-auto text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      


      {/* Invitation Message */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            Sería un placer enorme que nos pudieras acompañar...
          </p>
          <h2 className="text-4xl md:text-5xl elegant-font font-bold text-primary mb-8 flex items-center justify-center gap-3">
            <Crown className="w-10 h-10" />
            A nuestra boda
          </h2>
          <div className="bg-accent/20 rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-lg elegant-font font-semibold text-primary">
              Fecha: 12 de Diciembre del 2025
            </p>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="romantic-gradient">
        <WeddingCountdown />
      </section>

      {/* Photo Gallery */}
      <section className="bg-white">
        <PhotoGallery />
      </section>

      {/* Location */}
      <section className="py-16 px-4 romantic-gradient">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl cursive-font font-bold text-primary text-center mb-12 flex items-center justify-center gap-3">
            <MapPin className="w-8 h-8" />
            Dónde nos encontramos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremonia */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center romantic-shadow slide-up">
              <h3 className="text-2xl elegant-font font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Crown className="w-6 h-6" />
                Ceremonia
              </h3>
              <p className="text-lg mb-2 font-semibold">Iglesia Divina providencia</p>
              <p className="text-muted-foreground mb-4">6:00 PM</p>
              <Button 
                onClick={() => window.open('https://maps.app.goo.gl/wsBGbGeLRpdsXxV76')}
                className="bg-primary hover:bg-primary/90"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Ver ubicación
              </Button>
            </div>

            {/* Recepción */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center romantic-shadow slide-up">
              <h3 className="text-2xl elegant-font font-bold text-primary mb-4 flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6" />
                Recepción
              </h3>
              <p className="text-lg mb-2 font-semibold">Estancia Villa Real</p>
              <p className="text-muted-foreground mb-4">7:30 PM</p>
              <Button 
                onClick={() => window.open('https://maps.app.goo.gl/hKK97jLH5zZFd4dC7')}
                className="bg-primary hover:bg-primary/90"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Ver ubicación
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-accent/20 rounded-3xl p-8 slide-up">
            <Sparkles className="w-12 h-12 mx-auto text-accent-foreground mb-4" />
            <h3 className="text-2xl elegant-font font-bold text-primary mb-4 flex items-center justify-center gap-2">
              <Crown className="w-6 h-6" />
              Etiqueta formal
            </h3>
            <p className="text-muted-foreground">
              Vestimenta formal para hacer de este día algo especial
            </p>
          </div>
        </div>
      </section>

      {/* Gifts */}
      <section className="py-16 px-4 romantic-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 romantic-shadow fade-in">
            <Gift className="w-12 h-12 mx-auto text-primary mb-6" />
            <h3 className="text-3xl cursive-font font-bold text-primary mb-6 flex items-center justify-center gap-3">
              <Gift className="w-8 h-8" />
              Regalos y aportaciones
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Tu presencia es lo más importante para nosotros. Si deseas tener un detalle con nosotros, puedes
              elegir una aportación que nos ayude a contruir nuestro nuevo hogar.
            </p>
            
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center fade-in">
          <h3 className="text-4xl cursive-font font-bold text-primary mb-8 flex items-center justify-center gap-3">
            Con mucho amor, los esperamos
            <Heart className="w-8 h-8" />
          </h3>
          <div className="flex justify-center space-x-4">
            <Heart className="w-6 h-6 text-primary animate-pulse" />
            <Heart className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-6 h-6 text-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Index;
