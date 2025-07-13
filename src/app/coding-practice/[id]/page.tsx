'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/layout/components/ui/Card';
import { Button } from '../../components/layout/components/ui/Button';
import { Badge } from '../../components/layout/components/ui/Badge';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/layout/components/ui/Tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/layout/components/ui/Select';
import { Play, Send, RotateCcw } from 'lucide-react';
import { CodingProblem } from '../../types/coding';
import { getCodingProblemById } from '../../lib/coding-data';
import { CodeEditor } from '../../components/layout/components/coding/CodeEditor';

export default function SolveProblemPage() {
  const params = useParams();
  const [problem, setProblem] = useState<CodingProblem | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const problemData = getCodingProblemById(params.id as string);
    if (problemData) {
      setProblem(problemData);
      setCode(problemData.starterCode[selectedLanguage] || '');
    }
  }, [params.id, selectedLanguage]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    if (problem) {
      setCode(problem.starterCode[language] || '');
    }
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running code...');

    setTimeout(() => {
      if (problem) {
        const testCase = problem.testCases[0];
        setOutput(
          `Input: ${testCase.input}\nExpected Output: ${testCase.output}\nYour Output: ${testCase.output}\n\n✅ Test case passed!`
        );
      }
      setIsRunning(false);
    }, 2000);
  };

  const submitCode = async () => {
    setIsRunning(true);
    setOutput('Running all test cases...');

    setTimeout(() => {
      if (problem) {
        const passedTests =
          Math.floor(Math.random() * problem.testCases.length) + 1;
        const totalTests = problem.testCases.length;

        if (passedTests === totalTests) {
          setOutput(
            `🎉 Accepted!\n\nAll ${totalTests} test cases passed.\nRuntime: 68ms\nMemory: 42.1MB`
          );
        } else {
          setOutput(
            `❌ Wrong Answer\n\nPassed: ${passedTests}/${totalTests} test cases\n\nLast failed test case:\nInput: [1,2,3]\nExpected: 6\nYour output: 5`
          );
        }
      }
      setIsRunning(false);
    }, 3000);
  };

  const resetCode = () => {
    if (problem) {
      setCode(problem.starterCode[selectedLanguage] || '');
      setOutput('');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!problem) {
    return (
      <div className="text-center py-12 text-gray-700 dark:text-gray-300">
        <p>Problem not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white p-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Badge className={getDifficultyColor(problem.difficulty)}>
              {problem.difficulty}
            </Badge>
            {problem.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-2xl font-bold">{problem.title}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Problem Description */}
        <div>
          <Tabs defaultValue="description" className="flex flex-col">
            <TabsList className="grid w-full grid-cols-2 mb-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Problem</h3>
                    <p className="whitespace-pre-line text-black dark:text-white">
                      {problem.description}
                    </p>
                  </div>

                  {problem.examples.map((example, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-2">
                        Example {index + 1}:
                      </h4>
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono text-sm">
                        <div>
                          <strong>Input:</strong> {example.input}
                        </div>
                        <div>
                          <strong>Output:</strong> {example.output}
                        </div>
                        {example.explanation && (
                          <div>
                            <strong>Explanation:</strong>{' '}
                            {example.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {problem.constraints && (
                    <div>
                      <h4 className="font-semibold mb-2">Constraints:</h4>
                      <ul className="text-sm space-y-1 text-black dark:text-white">
                        {problem.constraints.map((constraint, index) => (
                          <li key={index}>• {constraint}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solutions">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    Solutions will be available after you solve the problem.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Code Editor */}
        <div className="flex flex-col min-h-0">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Code Editor</CardTitle>
                <div className="flex space-x-2">
                  <Button onClick={resetCode} variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Reset
                  </Button>
                  <Button
                    onClick={runCode}
                    variant="outline"
                    size="sm"
                    disabled={isRunning}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Run
                  </Button>
                  <Button
                    onClick={submitCode}
                    size="sm"
                    disabled={isRunning}
                  >
                    <Send className="h-4 w-4 mr-1" />
                    Submit
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              <div className="flex-1 min-h-0">
                <CodeEditor
                  language={selectedLanguage}
                  value={code}
                  onChange={setCode}
                />
              </div>

              {/* Output */}
              {output && (
                <div className="border-t p-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
                  <h4 className="font-semibold mb-2">Output:</h4>
                  <pre className="text-sm whitespace-pre-wrap font-mono">
                    {output}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
