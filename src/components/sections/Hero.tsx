import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Wallet } from 'lucide-react';
import travelHero from '@/assets/travel-hero.jpg';

const Hero = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Calendar,
      title: t('nav.itinerary'),
      description: t('itinerary.description'),
    },
    {
      icon: Wallet,
      title: t('nav.expenses'),
      description: t('expenses.description'),
    },
    {
      icon: MapPin,
      title: t('nav.ar'),
      description: "Discover local attractions and hidden gems",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${travelHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          <Button 
            size="lg" 
            className="gradient-sunset text-white hover:scale-105 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            {t('hero.cta')}
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="travel-card bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <feature.icon className="w-8 h-8 mb-4 mx-auto text-secondary" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 rounded-full bg-secondary/50"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 rounded-full bg-accent/50"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 rounded-full bg-primary-glow/50"></div>
      </div>
    </section>
  );
};

export default Hero;