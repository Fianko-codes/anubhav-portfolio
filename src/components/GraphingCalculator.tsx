
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const GraphingCalculator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [equation, setEquation] = useState('x^2');
  const [error, setError] = useState('');

  const drawGraph = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up coordinate system
    const width = canvas.width;
    const height = canvas.height;
    const xMin = -10;
    const xMax = 10;
    const yMin = -10;
    const yMax = 10;
    
    // Draw axes
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();
    
    // Parse and evaluate the equation
    try {
      // Replace ^ with ** for JavaScript exponents
      const parsedEquation = equation.replace(/\^/g, '**');
      
      // Plot the function
      ctx.strokeStyle = 'hsl(var(--primary))';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      let isFirstPoint = true;
      for (let px = 0; px < width; px++) {
        // Convert from pixel to coordinate
        const x = xMin + (px / width) * (xMax - xMin);
        
        try {
          // eslint-disable-next-line no-new-func
          const y = Function('x', `return ${parsedEquation}`)(x);
          
          // Convert from coordinate to pixel
          const py = height - ((y - yMin) / (yMax - yMin)) * height;
          
          if (isFirstPoint) {
            ctx.moveTo(px, py);
            isFirstPoint = false;
          } else {
            ctx.lineTo(px, py);
          }
        } catch (err) {
          // Skip points where the equation can't be evaluated
          continue;
        }
      }
      ctx.stroke();
      setError('');
    } catch (err) {
      setError('Invalid equation');
    }
  };
  
  useEffect(() => {
    drawGraph();
  }, [equation]);
  
  return (
    <Card className="bg-secondary border-none w-full">
      <CardHeader>
        <CardTitle>Interactive Function Plotter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <label htmlFor="equation" className="block text-sm font-medium mb-1">
            Enter a function of x (e.g., x^2, sin(x), 2*x+1):
          </label>
          <div className="flex gap-2">
            <Input
              id="equation"
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
              placeholder="Enter equation (e.g., x^2)"
              className="bg-background"
            />
            <Button onClick={drawGraph} variant="outline">Plot</Button>
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <div className="border border-muted rounded overflow-hidden">
          <canvas 
            ref={canvasRef} 
            width={500} 
            height={300} 
            className="w-full bg-background"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2 italic">
          Try functions like x^2, sin(x), cos(x), tan(x), or 2*x+3
        </p>
      </CardContent>
    </Card>
  );
};

export default GraphingCalculator;
