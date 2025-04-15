import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DashboardNav } from "@/components/dashboard-nav"
import { Edit, Plus, Trash2 } from "lucide-react"

const goals = [
  {
    id: "g1",
    name: "Emergency Fund",
    current: 4500,
    target: 10000,
    dueDate: "Dec 2024",
    description: "Build a safety net for unexpected expenses",
    category: "Savings",
  },
  {
    id: "g2",
    name: "Vacation",
    current: 1200,
    target: 3000,
    dueDate: "Aug 2024",
    description: "Summer trip to Hawaii",
    category: "Travel",
  },
  {
    id: "g3",
    name: "New Laptop",
    current: 800,
    target: 1500,
    dueDate: "Jul 2024",
    description: "Replace aging work computer",
    category: "Technology",
  },
  {
    id: "g4",
    name: "Home Down Payment",
    current: 15000,
    target: 60000,
    dueDate: "Jun 2026",
    description: "Save for first home purchase",
    category: "Housing",
  },
  {
    id: "g5",
    name: "Wedding Fund",
    current: 8000,
    target: 25000,
    dueDate: "Sep 2025",
    description: "Save for wedding expenses",
    category: "Life Events",
  },
  {
    id: "g6",
    name: "Car Repair Fund",
    current: 600,
    target: 2000,
    dueDate: "Nov 2024",
    description: "Prepare for upcoming maintenance",
    category: "Transportation",
  },
]

export default function GoalsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
            </svg>
            <span className="text-xl font-semibold">FinSmart</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Dashboard
            </a>
            <a href="/dashboard/transactions" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Transactions
            </a>
            <a href="/dashboard/budgets" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Budgets
            </a>
            <a href="/dashboard/goals" className="text-sm font-medium text-primary">
              Goals
            </a>
            <a href="/dashboard/insights" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Insights
            </a>
          </nav>
          {/* <Button size="sm" className="hidden md:flex">
            Connect Account
          </Button> */}
        </div>
      </header>
      <div className="flex-1 flex">
        <DashboardNav className="hidden md:block" />
        <main className="flex-1">
          <div className="container py-6 md:py-10">
            <div className="grid gap-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Savings Goals</h1>
                  <p className="text-muted-foreground">Track and manage your financial goals.</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {goals.map((goal) => {
                  const percentage = Math.round((goal.current / goal.target) * 100)

                  return (
                    <Card key={goal.id} className="flex flex-col">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{goal.name}</CardTitle>
                            <CardDescription>{goal.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Progress</span>
                            <span
                              className={`text-sm font-medium ${percentage >= 75
                                ? "text-emerald-500"
                                : percentage >= 50
                                  ? "text-amber-500"
                                  : "text-rose-500"
                                }`}
                            >
                              {percentage}%
                            </span>
                          </div>
                          <Progress value={percentage} className="h-2" />
                          <div className="flex justify-between items-center text-sm">
                            <span>
                              ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
                            </span>
                            <span className="text-muted-foreground">Due: {goal.dueDate}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">Category: {goal.category}</div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FinSmart. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </a>
            <a href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

