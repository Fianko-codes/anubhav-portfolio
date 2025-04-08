
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Instagram } from 'lucide-react';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';

const ContactPage = () => {
  const [headerRef, headerVisible] = useElementOnScreen({ threshold: 0.1 });
  const [cardsRef, cardsVisible] = useElementOnScreen({ threshold: 0.1 });
  const [quoteRef, quoteVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>} 
          className={`transition-all duration-700 ${headerVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <SectionHeader 
            title="Get In Touch" 
            subtitle="Let's connect and discuss ideas, opportunities, or just have a chat"
          />
        </div>

        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>} 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 transition-all duration-700 delay-200 ${cardsVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <Card className="bg-secondary border-none hover:bg-secondary/80 transition-colors hover:scale-105 duration-300">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-background p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a href="mailto:anubhavprasai123@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  anubhavprasai123@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-none hover:bg-secondary/80 transition-colors hover:scale-105 duration-300">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-background p-3 rounded-full">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Instagram</h4>
                <a 
                  href="https://instagram.com/anubhavprasai123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @anubhavprasai123
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-none hover:bg-secondary/80 transition-colors hover:scale-105 duration-300">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-background p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-muted-foreground">
                  Jhapa, Nepal
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div 
          ref={quoteRef as React.RefObject<HTMLDivElement>} 
          className={`mt-12 bg-gradient-to-br from-primary/20 via-accent/15 to-blue-400/10 p-8 rounded-lg text-center transition-all duration-700 delay-400 ${quoteVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-lg italic text-muted-foreground">
            "Whether you want to discuss mathematics, coding, or just chat about life's journey, I'd love to hear from you."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
