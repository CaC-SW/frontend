'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/layout/components/ui/Card'
import { Button } from '../components/layout/components/ui/Button'
import { Badge } from '../components/layout/components/ui/Badge'
import { Code, Clock, Trophy } from 'lucide-react'
import { CodingProblem } from '../types/coding'
import { getCodingProblems } from '../lib/coding-data'

export default function CodingPracticePage() {
  const [problems, setProblems] = useState<CodingProblem[]>([])

  useEffect(() => {
    setProblems(getCodingProblems())
  }, [])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Coding Practice</h1>
          <p className="text-muted-foreground">
            Solve programming challenges and improve your coding skills
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <Code className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <div className="text-2xl font-bold">{problems.length}</div>
              <div className="text-sm text-muted-foreground">Total Problems</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Clock className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-muted-foreground">Solved</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-muted-foreground">Points</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {problems.map((problem) => (
          <Card key={problem.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={getDifficultyColor(problem.difficulty)}>
                      {problem.difficulty}
                    </Badge>
                    {problem.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl hover:text-primary">
                    <Link href={`/coding-practice/${problem.id}`}>
                      {problem.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {problem.description}
                  </CardDescription>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div>Acceptance: {problem.acceptance}%</div>
                  <div className="mt-1">
                    <span className="text-green-600">✓ 0</span> / 
                    <span className="text-red-600 ml-1">✗ 0</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {problems.length === 0 && (
        <div className="text-center py-12">
          <Code className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">No coding problems available yet.</p>
          <p className="text-sm text-muted-foreground">
            Problems will be added soon. Check back later!
          </p>
        </div>
      )}
    </div>
  )
}
