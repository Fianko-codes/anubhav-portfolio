
import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Book {
  title: string;
  author: string;
  wikipediaBookUrl: string;
  wikipediaAuthorUrl: string;
}

const BookCollection = () => {
  const books: Book[] = [
    { 
      title: "The Alchemist", 
      author: "Paulo Coelho",
      wikipediaBookUrl: "https://en.wikipedia.org/wiki/The_Alchemist_(novel)",
      wikipediaAuthorUrl: "https://en.wikipedia.org/wiki/Paulo_Coelho"
    },
    { 
      title: "Siddhartha", 
      author: "Hermann Hesse",
      wikipediaBookUrl: "https://en.wikipedia.org/wiki/Siddhartha_(novel)",
      wikipediaAuthorUrl: "https://en.wikipedia.org/wiki/Hermann_Hesse"
    },
    { 
      title: "1984", 
      author: "George Orwell",
      wikipediaBookUrl: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
      wikipediaAuthorUrl: "https://en.wikipedia.org/wiki/George_Orwell"
    },
    { 
      title: "Animal Farm", 
      author: "George Orwell",
      wikipediaBookUrl: "https://en.wikipedia.org/wiki/Animal_Farm",
      wikipediaAuthorUrl: "https://en.wikipedia.org/wiki/George_Orwell"
    },
    { 
      title: "Brida", 
      author: "Paulo Coelho",
      wikipediaBookUrl: "https://en.wikipedia.org/wiki/Brida_(novel)",
      wikipediaAuthorUrl: "https://en.wikipedia.org/wiki/Paulo_Coelho"
    },
    { 
      title: "Man's Search for Meaning", 
      author: "Viktor E. Frankl",
      wikipediaBookUrl: "https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning",
      wikipediaAuthorUrl: "https://en.wikipedia.org/wiki/Viktor_Frankl"
    },
    { 
      title: "Meditation", 
      author: "Marcus Aurelius",
      wikipediaBookUrl: "https://en.wikipedia.org/wiki/Meditations",
      wikipediaAuthorUrl: "https://en.wikipedia.org/wiki/Marcus_Aurelius"
    },
    { 
      title: "Life is not a Tale", 
      author: "Various",
      wikipediaBookUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Life+is+not+a+Tale+book",
      wikipediaAuthorUrl: "https://en.wikipedia.org/wiki/Special:Search?search=Life+is+not+a+Tale+author"
    }
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
              <div key={index} className="flex items-start group hover:bg-background/70 p-3 rounded-lg transition-colors">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <a 
                    href={book.wikipediaBookUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium group-hover:text-primary transition-colors flex items-center"
                  >
                    {book.title}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href={book.wikipediaAuthorUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {book.author}
                  </a>
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
