
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, ChevronDown, Bot } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const responses = {
  greeting: [
    "Hello! Welcome to Anubhav's portfolio! How can I help you?",
    "Hi there! I'm Anubhav's virtual assistant. What would you like to know?"
  ],
  about: [
    "Anubhav is a 17-year-old student from Nepal with a passion for mathematics and coding.",
    "Anubhav is currently in grade 11 and represents Nepal in the IMMC '25 mathematics competition."
  ],
  projects: [
    "Anubhav has worked on mathematical modeling, this portfolio website, and is planning a math concept library.",
    "Check out the Projects page to see Anubhav's current work and future plans!"
  ],
  skills: [
    "Anubhav's skills include mathematics, problem-solving, and coding.",
    "Mathematical modeling and logical thinking are some of Anubhav's strongest skills."
  ],
  contact: [
    "You can reach Anubhav via email at anubhavprasai123@gmail.com or through Instagram.",
    "The Contact page has all the information you need to connect with Anubhav."
  ],
  fallback: [
    "I'm not sure I understand. Could you rephrase that?",
    "That's an interesting question. You might want to contact Anubhav directly for more specific information.",
    "I'm still learning! You can find more information on the different pages of this portfolio."
  ],
  easter: [
    "🎮 You found an Easter egg! Try the Konami code (↑↑↓↓←→←→BA) anywhere on the site for a fun surprise!"
  ]
};

const getResponse = (message: string) => {
  message = message.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
  } else if (message.includes('about') || message.includes('who is')) {
    return responses.about[Math.floor(Math.random() * responses.about.length)];
  } else if (message.includes('project') || message.includes('work')) {
    return responses.projects[Math.floor(Math.random() * responses.projects.length)];
  } else if (message.includes('skill') || message.includes('good at')) {
    return responses.skills[Math.floor(Math.random() * responses.skills.length)];
  } else if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
    return responses.contact[Math.floor(Math.random() * responses.contact.length)];
  } else if (message.includes('easter egg') || message.includes('secret') || message.includes('konami')) {
    return responses.easter[0];
  } else {
    return responses.fallback[Math.floor(Math.random() * responses.fallback.length)];
  }
};

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! I'm Anubhav's AI assistant. How can I help you?", sender: 'bot' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: message, sender: 'user' }]);
    
    // Get bot response
    setTimeout(() => {
      const botReply = getResponse(message);
      setMessages(prev => [...prev, { text: botReply, sender: 'bot' }]);
    }, 600);
    
    setMessage('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast({
        title: "Chat Assistant",
        description: "Ask me about Anubhav's skills, projects, or how to contact him!",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-80 sm:w-96 shadow-lg bg-card border-none animate-scale-in">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
            <CardTitle className="flex items-center gap-2 text-md">
              <Bot className="h-4 w-4" /> Chat Assistant
            </CardTitle>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" onClick={toggleChat} className="h-7 w-7">
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-7 w-7">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-64 overflow-y-auto space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-3 pt-2 border-t">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!message.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={toggleChat}
          className="rounded-full h-12 w-12 shadow-lg flex items-center justify-center animate-bounce"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
