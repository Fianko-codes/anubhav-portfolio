
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BookCollection = () => {
  const books = [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Siddhartha", author: "Hermann Hesse" },
    { title: "1984", author: "George Orwell" },
    { title: "Animal Farm", author: "George Orwell" },
    { title: "Brida", author: "Paulo Coelho" },
    { title: "Man's Search for Meaning", author: "Viktor E. Frankl" },
    { title: "Meditation", author: "Marcus Aurelius" }
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <BookOpen className="h-5 w-5 text-primary mr-2" />
        <h3 className="text-xl font-bold">Literary Explorations</h3>
      </div>
      
      <Card className="bg-secondary border-none">
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-6">
            Books have been my gateway to different worlds and perspectives. Here are some that have shaped my thinking:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {books.map((book, index) => (
              <div key={index} className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">{book.title}</p>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-2 border-primary pl-4 mt-6 italic text-muted-foreground">
            "The more I learn, the more I realize how much I don't know."
            <cite className="block text-sm mt-1">— Albert Einstein</cite>
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookCollection;
