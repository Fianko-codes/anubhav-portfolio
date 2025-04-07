
import { useEffect, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import confetti from 'canvas-confetti';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

const KonamiEasterEgg = () => {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [easterEggActivated, setEasterEggActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // If the correct key in the sequence is pressed
      if (event.key === KONAMI_CODE[konamiIndex]) {
        // Move to the next key in the sequence
        if (konamiIndex === KONAMI_CODE.length - 1) {
          // Konami code completed!
          setEasterEggActivated(true);
          triggerEasterEgg();
          setKonamiIndex(0);
        } else {
          setKonamiIndex(konamiIndex + 1);
        }
      } else {
        // Wrong key, reset the sequence
        setKonamiIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiIndex]);

  const triggerEasterEgg = () => {
    // Show congratulatory message
    toast({
      title: "🎮 Konami Code Activated!",
      description: "You found the Easter egg! Enjoy the confetti!",
      duration: 5000,
    });
    
    // Trigger confetti
    const end = Date.now() + 3000;
    
    const colors = ['#3b82f6', '#a855f7', '#ec4899'];
    
    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: colors
      });
      
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: colors
      });
      
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return null; // This component doesn't render anything
};

export default KonamiEasterEgg;
