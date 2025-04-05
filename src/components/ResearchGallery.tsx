
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const ResearchGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/lovable-uploads/691da68d-fed1-402d-ae65-364c641480aa.png",
    "/lovable-uploads/b0205f19-d3ad-4804-8f14-d15e828c09cf.png",
    "/lovable-uploads/ee434fc6-2191-4aa7-88d1-81987b8031c6.png",
    "/lovable-uploads/5c24b7e9-89f1-40a7-b730-69a06c3f5f14.png",
    "/lovable-uploads/cc025f06-642f-450a-8895-b84802af07fd.png",
    "/lovable-uploads/32d65cee-0c8c-4e06-b076-5ff31a0c1b7d.png",
    "/lovable-uploads/0c676df0-a0f9-4714-8f27-3f883b14f6a6.png",
    "/lovable-uploads/df0a4b4e-a8ec-43a3-951c-98827c5af899.png",
    "/lovable-uploads/7da41383-a701-4cf4-a847-6cf499617339.png",
    "/lovable-uploads/934ceac3-3a8e-47cf-9705-32a22f9c10fe.png"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mt-8 animate-fade-in">
      <h4 className="text-lg font-semibold mb-4">Research Paper Gallery</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 animate-fade-in">
        {images.map((img, idx) => (
          <Dialog key={idx}>
            <DialogTrigger asChild>
              <div className="cursor-pointer relative group overflow-hidden rounded-md transform transition-all duration-300 hover:scale-105">
                <img 
                  src={img} 
                  alt={`Research paper page ${idx + 1}`} 
                  className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white h-5 w-5 animate-scale-in" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 text-center">
                  Page {idx + 1}
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[80vw] max-h-[90vh] overflow-hidden p-0">
              <div className="relative h-full">
                <div className="absolute top-2 right-2 z-10">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => document.querySelector('[data-state="open"]')?.removeAttribute('data-state')}
                    className="bg-black/30 hover:bg-black/50 text-white rounded-full h-8 w-8"
                  >
                    <X size={16} />
                  </Button>
                </div>
                
                <div className="flex items-center justify-center bg-black/95 p-4 relative">
                  <div className="flex items-center h-full">
                    <img 
                      src={images[currentImage]} 
                      alt={`Research paper page ${currentImage + 1}`} 
                      className="max-h-[80vh] w-auto mx-auto animate-fade-in"
                    />
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-center text-xs text-white">
                    <span>© Anubhav Prasai - NMMC 2025 - All Rights Reserved</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={prevImage}
                    className="absolute left-2 bg-black/30 hover:bg-black/50 text-white rounded-full h-8 w-8 animate-fade-in"
                  >
                    <ChevronLeft size={16} />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={nextImage}
                    className="absolute right-2 bg-black/30 hover:bg-black/50 text-white rounded-full h-8 w-8 animate-fade-in"
                  >
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      
      <div className="mt-4 text-xs text-muted-foreground italic text-center">
        Click on images to view larger version with watermark protection
      </div>
    </div>
  );
};

export default ResearchGallery;
