
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Instagram } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Let's connect and discuss ideas, opportunities, or just have a chat"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card className="bg-secondary border-none">
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

          <Card className="bg-secondary border-none">
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

          <Card className="bg-secondary border-none">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-background p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-muted-foreground">
                  Newton's Education Academy, Jhapa, Nepal
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/20 via-accent/15 to-blue-400/10 p-8 rounded-lg text-center">
          <p className="text-lg italic text-muted-foreground">
            "Whether you want to discuss mathematics, coding, or just chat about life's journey, I'd love to hear from you."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
