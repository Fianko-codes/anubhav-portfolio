
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Code } from 'lucide-react';

const challenges = [
  {
    id: 1,
    title: 'Fibonacci Sequence',
    description: 'Write a function that returns the nth number in the Fibonacci sequence.',
    starterCode: 'function fibonacci(n) {\n  // Your code here\n}',
    solution: 'function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n-1) + fibonacci(n-2);\n}',
    testCases: [
      { input: '5', expected: 5 },
      { input: '8', expected: 21 }
    ]
  },
  {
    id: 2,
    title: 'Palindrome Check',
    description: 'Write a function to check if a given string is a palindrome.',
    starterCode: 'function isPalindrome(str) {\n  // Your code here\n}',
    solution: 'function isPalindrome(str) {\n  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");\n  return cleanStr === cleanStr.split("").reverse().join("");\n}',
    testCases: [
      { input: '"radar"', expected: true },
      { input: '"hello"', expected: false },
      { input: '"A man, a plan, a canal: Panama"', expected: true }
    ]
  }
];

const CodingChallenge = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userCode, setUserCode] = useState(challenges[currentChallenge].starterCode);
  const [showSolution, setShowSolution] = useState(false);
  const [testResults, setTestResults] = useState<Array<{ passed: boolean, result: any }>>([]);

  const runCode = () => {
    const challenge = challenges[currentChallenge];
    try {
      // eslint-disable-next-line no-new-func
      const userFunction = new Function(`return ${userCode}`)();
      
      const results = challenge.testCases.map(testCase => {
        try {
          // eslint-disable-next-line no-eval
          const result = eval(`userFunction(${testCase.input})`);
          const passed = result === testCase.expected;
          return { passed, result };
        } catch (err) {
          return { passed: false, result: 'Error' };
        }
      });
      
      setTestResults(results);
      
      const allPassed = results.every(r => r.passed);
      if (allPassed) {
        toast({
          title: "Success!",
          description: "All tests passed. Great job!",
        });
      } else {
        toast({
          title: "Not quite there",
          description: "Some tests failed. Keep trying!",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There's a syntax error in your code.",
        variant: "destructive",
      });
      setTestResults([]);
    }
  };

  const nextChallenge = () => {
    const nextIndex = (currentChallenge + 1) % challenges.length;
    setCurrentChallenge(nextIndex);
    setUserCode(challenges[nextIndex].starterCode);
    setShowSolution(false);
    setTestResults([]);
  };

  return (
    <Card className="bg-secondary border-none">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <CardTitle>Coding Challenge</CardTitle>
        </div>
        <CardDescription>
          {challenges[currentChallenge].description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="code">
          <TabsList className="mb-4">
            <TabsTrigger value="code">Your Code</TabsTrigger>
            {showSolution && <TabsTrigger value="solution">Solution</TabsTrigger>}
          </TabsList>
          <TabsContent value="code">
            <div className="font-mono text-sm bg-background p-4 rounded-md overflow-auto max-h-64">
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="w-full h-48 bg-transparent outline-none resize-none"
              />
            </div>
          </TabsContent>
          {showSolution && (
            <TabsContent value="solution">
              <div className="font-mono text-sm bg-background p-4 rounded-md overflow-auto max-h-64">
                <pre>{challenges[currentChallenge].solution}</pre>
              </div>
            </TabsContent>
          )}
        </Tabs>
        
        {testResults.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Test Results:</h4>
            <ul className="space-y-1">
              {testResults.map((result, index) => (
                <li key={index} className="text-sm flex items-center">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${result.passed ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  {`Test ${index + 1}: ${result.passed ? 'Passed' : 'Failed'}`}
                  {!result.passed && ` (Got: ${JSON.stringify(result.result)})`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <Button onClick={runCode} variant="default" className="mr-2">Run Code</Button>
          <Button onClick={() => setShowSolution(!showSolution)} variant="outline">
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </Button>
        </div>
        <Button onClick={nextChallenge} variant="secondary">Next Challenge</Button>
      </CardFooter>
    </Card>
  );
};

export default CodingChallenge;
