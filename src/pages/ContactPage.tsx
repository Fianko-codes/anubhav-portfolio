
import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Mail, MapPin, Send, Instagram } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Use the mailto: protocol to open the user's email client
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    const mailtoLink = `mailto:anubhavprasai123@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    
    // Show success toast
    toast({
      title: "Email client opened",
      description: "Your message has been prepared in your email client. Please send it from there.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Let's connect and discuss ideas, opportunities, or just have a chat"
        />

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 w-full">
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            
            <div className="space-y-8">
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

              <div className="bg-gradient-to-br from-primary/20 via-accent/15 to-blue-400/10 p-6 rounded-lg">
                <p className="italic text-muted-foreground">
                  "Whether you want to discuss mathematics, coding, or just chat about life's journey, I'd love to hear from you."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <Card className="bg-secondary border-none">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Message subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
