export interface TestCase {
  input: string
  output: string
  explanation?: string
}

export interface Example {
  input: string
  output: string
  explanation?: string
}

export interface CodingProblem {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
  examples: Example[]
  constraints?: string[]
  testCases: TestCase[]
  starterCode: {
    [language: string]: string
  }
  acceptance: number
  createdAt: string
}

export interface Submission {
  id: string
  problemId: string
  code: string
  language: string
  status: 'accepted' | 'wrong-answer' | 'time-limit-exceeded' | 'runtime-error'
  runtime?: number
  memory?: number
  submittedAt: string
}