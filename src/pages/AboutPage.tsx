
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Code, Calculator, Dumbbell, Brain, BookText } from 'lucide-react';
import BookCollection from '@/components/BookCollection';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="About Me" 
          subtitle="My journey, values, and what drives me forward"
        />

        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Hello! I'm Anubhav Prasai, a 17-year-old student currently in grade 11 in Nepal. 
                My academic journey has been one of discovery and transformation.
              </p>
              <p>
                School wasn't always something I connected with, but everything changed when I discovered 
                mathematics. What started as just another subject became a gateway to a world of logical 
                thinking and problem-solving that truly captivated me.
              </p>
              <p>
                This newfound passion led me to coding and computational thinking. Now, I find myself 
                drawn to challenges that require analytical thinking and creative solutions. 
                I'm particularly proud to be Nepal's IMMC '25 representative alongside three peers.
              </p>
              <p>
                Beyond academics, I've been developing a disciplined approach to fitness - not just for 
                physical appearance, but for the mental clarity and sense of accomplishment it brings.
              </p>
              <p className="italic">
                "True education is a path of constant discovery, where each answer leads to deeper questions." — This quote from Socrates 
                resonates deeply with my approach to knowledge and learning.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/15 to-blue-400/10 rounded-2xl p-1">
              <div className="h-full w-full rounded-xl glass flex items-center justify-center p-8">
                <blockquote className="text-center italic">
                  <p className="text-xl text-foreground mb-4">
                    "Keep moving, keep learning, and make each step count, even if I don't always have a clear plan."
                  </p>
                  <cite className="text-muted-foreground">— My personal philosophy</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">My Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-secondary border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Calculator className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">Mathematical Modeling</h4>
                <p className="text-muted-foreground">
                  Representing real-world problems through mathematical frameworks fascinates me. 
                  As part of Nepal's IMMC team, I work on creating models that describe complex systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Code className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">Coding & Problem Solving</h4>
                <p className="text-muted-foreground">
                  I love the process of breaking down complex problems into manageable pieces and building 
                  solutions through code. The logical thinking it requires perfectly complements my mathematical interests.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Brain className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">Logical Puzzles</h4>
                <p className="text-muted-foreground">
                  Give me a puzzle, and I'm there. Whether it's chess problems, logic games, or 
                  mathematical riddles, I enjoy the mental challenge and the satisfaction of finding solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">Philosophy & Ideas</h4>
                <p className="text-muted-foreground">
                  I'm drawn to philosophical questions about purpose, knowledge, and how we should live. 
                  Exploring different perspectives helps me develop a more nuanced understanding of the world.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Dumbbell className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">Fitness Journey</h4>
                <p className="text-muted-foreground">
                  My approach to fitness is about holistic improvement - building discipline, feeling better 
                  mentally, and enjoying the process of getting stronger and more capable each day.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <BookText className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">Reading & Learning</h4>
                <p className="text-muted-foreground">
                  Books open doors to new ideas and perspectives. I enjoy reading across various subjects - 
                  from mathematics and science to philosophy and personal development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <BookCollection />

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">My Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">Curiosity & Growth</h4>
              <p className="text-muted-foreground mb-6">
                I believe in the power of asking questions and seeking knowledge. Learning isn't just about 
                academics - it's a lifelong journey of growth and discovery.
              </p>
              
              <h4 className="text-xl font-semibold mb-2">Structure with Flexibility</h4>
              <p className="text-muted-foreground mb-6">
                I appreciate order and structure, but also value the ability to adapt. The best plans leave 
                room for adjustment and creative solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-2">Persistence</h4>
              <p className="text-muted-foreground mb-6">
                Whether it's a difficult math problem or a fitness goal, I've learned that consistent effort 
                and determination are key to overcoming challenges.
              </p>
              
              <h4 className="text-xl font-semibold mb-2">Authenticity</h4>
              <p className="text-muted-foreground">
                "Life's more fun when you're just doing your thing." I believe in staying true to myself, 
                following my interests, and finding my own path, even if it's not always clearly defined.
              </p>
            </div>
          </div>
          
          <Card className="bg-secondary border-none mt-8">
            <CardContent className="p-6 italic text-muted-foreground">
              <p>
                "In the vast landscape of knowledge, I am but a traveler seeking to understand the patterns that connect us all to the universe."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
