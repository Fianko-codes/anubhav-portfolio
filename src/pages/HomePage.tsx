
import React from 'react';
import { ArrowRight, Cpu, BookOpen, Dumbbell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';
import GraphingCalculator from '@/components/GraphingCalculator';
import CodingChallenge from '@/components/CodingChallenge';

const HomePage = () => {
  const [heroRef, heroVisible] = useElementOnScreen({ threshold: 0.1 });
  const [interestsRef, interestsVisible] = useElementOnScreen({ threshold: 0.1 });
  const [calculatorRef, calculatorVisible] = useElementOnScreen({ threshold: 0.1 });
  const [aboutRef, aboutVisible] = useElementOnScreen({ threshold: 0.1 });
  const [challengeRef, challengeVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-screen flex items-center" 
        ref={heroRef as React.RefObject<HTMLElement>}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between transition-all duration-700 ${heroVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Anubhav Prasai</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A curious mind exploring the world through math, code, and fitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <div className="w-72 h-72 mx-auto rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-blue-400/10 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full glass flex items-center justify-center">
                <span className="text-4xl font-bold text-gradient">AP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section 
        className="py-20 bg-background" 
        ref={calculatorRef as React.RefObject<HTMLElement>}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 delay-100 ${calculatorVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Interactive Math Tools</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore mathematical concepts with these interactive tools
            </p>
            <div className="h-1 w-20 bg-primary mt-4 mx-auto rounded-full"></div>
          </div>
          
          <div className="mt-8">
            <GraphingCalculator />
          </div>
        </div>
      </section>

      {/* Coding Challenge Section */}
      <section 
        className="py-20 bg-card" 
        ref={challengeRef as React.RefObject<HTMLElement>}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 delay-200 ${challengeVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Test Your Coding Skills</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Try solving these programming challenges to sharpen your skills
            </p>
            <div className="h-1 w-20 bg-primary mt-4 mx-auto rounded-full"></div>
          </div>
          
          <div className="mt-8">
            <CodingChallenge />
          </div>
        </div>
      </section>

      {/* Featured Interests */}
      <section 
        className="py-20 bg-card" 
        ref={interestsRef as React.RefObject<HTMLElement>}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 delay-300 ${interestsVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Drives Me</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              My journey is powered by curiosity and a desire to continually learn and improve.
            </p>
            <div className="h-1 w-20 bg-primary mt-4 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-secondary border-none hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <Cpu className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Mathematics & Coding</CardTitle>
                <CardDescription>From math modeling to solving real-world problems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nepal's IMMC '25 representative, passionate about logical challenges and algorithmic thinking.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-none hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Books & Philosophy</CardTitle>
                <CardDescription>Exploring ideas and expanding perspectives</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Finding meaning through reading, reflection, and questioning the world around me.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-none hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <Dumbbell className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Fitness Journey</CardTitle>
                <CardDescription>Building discipline and strength</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Not just for looks, but for mental clarity and the satisfaction of consistent progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section 
        className="py-20" 
        ref={aboutRef as React.RefObject<HTMLElement>}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 delay-400 ${aboutVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">My Journey So Far</h2>
              <p className="text-muted-foreground mb-6">
                I'm a 17-year-old student from Nepal, currently in grade 11. School wasn't always my thing, 
                but discovering math changed everything for me. Now I'm diving into coding and problem-solving, 
                with a growing interest in fitness and personal development.
              </p>
              <p className="text-muted-foreground mb-4">
                My philosophy is simple: Keep moving, keep learning, and make each step count, even if I don't always have a clear plan.
                Life's more fun when you're just doing your thing.
              </p>
              <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground mb-8">
                "True education is a path of constant discovery, where each answer leads to deeper questions."
                <cite className="block text-xs mt-1">— Socrates</cite>
              </blockquote>
              <Button asChild>
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-blue-400/10 p-1">
                <div className="h-full w-full rounded-xl glass flex items-center justify-center p-6">
                  <p className="text-center text-muted-foreground italic px-6">
                    "Yet, as the sun begins its descent, casting long shadows across the land, a sense of despair creeps in. I fear that I am becoming a forgotten relic, a footnote in the grand story of life."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Whether you want to discuss mathematics, coding, or just chat about life's journey, I'd love to hear from you.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
