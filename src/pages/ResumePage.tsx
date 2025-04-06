import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileDown } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ResumePage = () => {
  const handleDownload = () => {
    toast({
      title: "Coming Soon",
      description: "The PDF version will be available soon. Please check back later.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <SectionHeader 
            title="Resume" 
            subtitle="My educational background and achievements"
          />
          <Button onClick={handleDownload} className="hidden sm:flex">
            <FileDown className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>

        <Button onClick={handleDownload} className="w-full mb-8 sm:hidden">
          <FileDown className="mr-2 h-4 w-4" /> Download PDF
        </Button>

        <Card className="bg-secondary border-none mb-8">
          <CardContent className="p-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Anubhav Prasai</h2>
              <p className="text-muted-foreground">Grade 11 Student | Math Enthusiast | Aspiring Developer</p>
              <p className="text-sm text-muted-foreground">anubhavprasai123@gmail.com</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <Card className="bg-secondary border-none">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">High School (Grade 11)</h4>
                      <span className="text-sm text-muted-foreground">Present</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Newton's Education Academy, Jhapa, Nepal</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Focus on Mathematics, Physics, Chemistry, and Computer Science
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">Secondary Education</h4>
                      <span className="text-sm text-muted-foreground">2022</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Newton's Education Academy, Jhapa, Nepal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Achievements & Activities</h3>
            <Card className="bg-secondary border-none">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">International Mathematical Modeling Challenge (IMMC)</h4>
                      <span className="text-sm text-muted-foreground">2025</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Selected as Nepal's representative for the prestigious international competition
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">Mathematics Competitions</h4>
                      <span className="text-sm text-muted-foreground">2021-Present</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Participated in various national and regional mathematics competitions
                    </p>
                  </div>

                  <Separator />
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">Programming Club</h4>
                      <span className="text-sm text-muted-foreground">2023-Present</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Active member focusing on algorithm implementation and problem-solving
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <Card className="bg-secondary border-none">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Technical Skills</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-muted-foreground">Mathematical Modeling</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-muted-foreground">Problem Solving</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-muted-foreground">Programming Basics</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-muted-foreground">Logical Reasoning</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Soft Skills</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-muted-foreground">Analytical Thinking</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-muted-foreground">Team Collaboration</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-muted-foreground">Continuous Learning</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-muted-foreground">Self-Motivation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Interests</h3>
            <Card className="bg-secondary border-none">
              <CardContent className="p-6">
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-muted-foreground">Mathematical Modeling</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-muted-foreground">Coding</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-muted-foreground">Logical Puzzles</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-muted-foreground">Philosophy</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-muted-foreground">Fitness</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-muted-foreground">Reading</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
