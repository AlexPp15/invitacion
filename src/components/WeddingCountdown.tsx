import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WeddingCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Set your wedding date here (año, mes-1, día, hora, minuto)
  const weddingDate = new Date(2025, 11, 12, 18, 0, 0); // 25 de diciembre de 2024, 6:00 PM

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center py-8 px-4">
  <h3
    className="text-2xl md:text-3xl elegant-font font-bold mb-6 flex items-center justify-center gap-3"
    style={{ color: "rgba(104, 11, 8, 1)" }}
  >
    <Clock className="w-8 h-8" style={{ color: "rgba(104, 11, 8, 1)" }} />
    Faltan...
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 soft-shadow">
      <div
        className="text-3xl md:text-4xl font-bold"
        style={{ color: "rgba(104, 11, 8, 1)" }}
      >
        {timeLeft.days}
      </div>
      <div className="text-sm" style={{ color: "rgba(104, 11, 8, 1)" }}>
        Días
      </div>
    </div>

    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 soft-shadow">
      <div
        className="text-3xl md:text-4xl font-bold"
        style={{ color: "rgba(104, 11, 8, 1)" }}
      >
        {timeLeft.hours}
      </div>
      <div className="text-sm" style={{ color: "rgba(104, 11, 8, 1)" }}>
        Horas
      </div>
    </div>

    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 soft-shadow">
      <div
        className="text-3xl md:text-4xl font-bold"
        style={{ color: "rgba(104, 11, 8, 1)" }}
      >
        {timeLeft.minutes}
      </div>
      <div className="text-sm" style={{ color: "rgba(104, 11, 8, 1)" }}>
        Minutos
      </div>
    </div>

    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 soft-shadow">
      <div
        className="text-3xl md:text-4xl font-bold"
        style={{ color: "rgba(104, 11, 8, 1)" }}
      >
        {timeLeft.seconds}
      </div>
      <div className="text-sm" style={{ color: "rgba(104, 11, 8, 1)" }}>
        Segundos
      </div>
    </div>
  </div>
</div>

  );
};

export default WeddingCountdown;