
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, Code, FileText, ExternalLink } from 'lucide-react';
import ResearchSummary from '@/components/ResearchSummary';
import BookCollection from '@/components/BookCollection';

const ProjectsPage = () => {
  const projects = [
    {
      title: "IMMC Mathematical Modeling",
      description: "As part of Nepal's IMMC '25 team, worked on complex mathematical models to solve real-world problems through computational approaches.",
      icon: <Calculator className="h-8 w-8 text-primary" />,
      tags: ["Mathematical Modeling", "Research", "Team Collaboration"],
      link: "#",
      status: "In Progress"
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed this responsive portfolio website using React, Tailwind CSS, and modern web development tools.",
      icon: <Code className="h-8 w-8 text-primary" />,
      tags: ["React", "Tailwind CSS", "Web Development"],
      link: "#",
      status: "Completed"
    },
    {
      title: "Math Concept Library",
      description: "Building an interactive library of mathematical concepts with visualizations and problem-solving approaches.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      tags: ["Mathematics", "Education", "Research"],
      link: "#",
      status: "Planning"
    }
  ];

  const futureProjects = [
    "Machine Learning Applications",
    "Algorithm Visualization Tools",
    "Fitness Progress Tracker",
    "Interactive Problem-Solving Platform"
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Projects & Portfolio" 
          subtitle="A showcase of my work and ongoing endeavors"
        />

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Featured Research</h3>
          <ResearchSummary />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Current Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-secondary border-none h-full flex flex-col">
                <CardHeader>
                  <div className="mb-4">{project.icon}</div>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="bg-background/50">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full" disabled={project.status !== "Completed"}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <BookCollection />

        <div>
          <h3 className="text-2xl font-bold mb-6">Future Explorations</h3>
          <p className="text-muted-foreground mb-8">
            While I continue to work on current projects, here are some areas and ideas I'm excited to explore in the future:
          </p>
          <Card className="bg-secondary border-none">
            <CardContent className="p-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {futureProjects.map((project, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-muted-foreground">{project}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <p className="text-muted-foreground mt-8 italic text-center">
            This portfolio is continuously evolving as I explore new areas and complete more projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
