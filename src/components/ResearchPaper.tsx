
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, LineChart, BookOpen, Quote } from 'lucide-react';
import ResearchGallery from './ResearchGallery';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ResearchPaper = () => {
  return (
    <div className="mb-12 animate-fade-in">
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div className="relative">
            <img 
              src="/lovable-uploads/691da68d-fed1-402d-ae65-364c641480aa.png" 
              alt="Research Paper First Page" 
              className="w-full rounded-t-lg transform transition hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="flex justify-between items-end">
                <Badge variant="secondary" className="mb-2 animate-pulse">NMMC Winner 2025</Badge>
                <div className="text-xs text-muted-foreground italic">© Anubhav Prasai - All Rights Reserved</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="text-xl font-bold animate-fade-in">A Mathematical Model for Analyzing Bus Waiting Times Under Stochastic Delays</h3>
          <p className="text-muted-foreground mt-2">
            This paper presents a comprehensive mathematical model designed to analyze and predict bus waiting times experienced by commuters, 
            explicitly accounting for the inherent variability in bus arrival schedules due to stochastic delays.
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-background/50 transition-all hover:bg-primary/20 duration-300">Monte Carlo Simulation</Badge>
            <Badge variant="outline" className="bg-background/50 transition-all hover:bg-primary/20 duration-300">Stochastic Modeling</Badge>
            <Badge variant="outline" className="bg-background/50 transition-all hover:bg-primary/20 duration-300">Transportation Planning</Badge>
            <Badge variant="outline" className="bg-background/50 transition-all hover:bg-primary/20 duration-300">Probability Distribution</Badge>
          </div>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-secondary border-none transition-transform hover:translate-y-[-5px] duration-300">
              <CardContent className="p-4">
                <h4 className="font-medium text-sm mb-2 flex items-center">
                  <Award className="h-4 w-4 mr-2 text-primary" />
                  Key Findings
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Average waiting time of 6.98 minutes under simulated conditions</li>
                  <li>• Strong correlation between mean delay and waiting times</li>
                  <li>• 90th percentile waiting time of 11.12 minutes</li>
                  <li>• Model accuracy within 0.02 minutes of analytical approximation</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-secondary border-none transition-transform hover:translate-y-[-5px] duration-300">
              <CardContent className="p-4">
                <h4 className="font-medium text-sm mb-2 flex items-center">
                  <LineChart className="h-4 w-4 mr-2 text-primary" />
                  Methodology
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Monte Carlo simulation with 10,000 runs</li>
                  <li>• Normal distribution modeling for bus delays</li>
                  <li>• Statistical analysis of waiting time distributions</li>
                  <li>• Comparison with analytical approximation methods</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6 p-5 border border-secondary rounded-lg bg-secondary/50">
            <h4 className="font-medium text-sm mb-3 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-primary" />
              Research Summary
            </h4>
            <p className="text-sm text-muted-foreground">
              This research addresses a critical real-world problem: the unpredictability of public transportation wait times. 
              Using stochastic modeling and Monte Carlo simulation techniques, I developed a mathematical framework that accurately 
              predicts bus waiting times under various delay conditions. The model accounts for random variations in arrival patterns 
              and provides statistical insights into expected waiting times.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              The significance of this work lies in its practical applications for transportation planning and resource allocation. 
              My findings demonstrate that even small improvements in bus scheduling reliability can lead to substantial reductions 
              in average waiting times, enhancing the overall public transportation experience. This research won the National Mathematical 
              Modeling Challenge 2025, validating its innovative approach and real-world relevance.
            </p>
          </div>
          
          {/* Quote section with beautiful background */}
          <div className="mt-6 rounded-lg overflow-hidden relative">
            <div className="bg-gradient-to-r from-primary/30 via-accent/20 to-blue-400/30 p-6 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzIxMiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDgiPjwvcGF0aD4KPC9zdmc+')] opacity-70"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4 ring-2 ring-primary/40 animate-fade-in">
                    <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg" alt="Albert Einstein" />
                    <AvatarFallback>AE</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Albert Einstein</h4>
                    <p className="text-xs text-muted-foreground">Theoretical Physicist</p>
                  </div>
                </div>
                <blockquote className="italic text-sm border-l-2 border-primary/50 pl-4 py-1 animate-fade-in">
                  "The more I learn, the more I realize how much I don't know."
                </blockquote>
              </div>
            </div>
          </div>
          
          <ResearchGallery />
          
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="group" disabled>
              <ExternalLink className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" />
              View Full Paper (Available upon request)
            </Button>
          </div>
          
          <div className="mt-2 text-xs text-center text-muted-foreground italic">
            Watermarked preview only. Please contact me directly for academic or research purposes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
