import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DashboardNav } from "@/components/dashboard-nav"
import { Edit, Plus, Trash2 } from "lucide-react"

const budgets = [
  {
    id: "b1",
    name: "Housing",
    current: 1200,
    limit: 1300,
    period: "Monthly",
    category: "Essential",
  },
  {
    id: "b2",
    name: "Groceries",
    current: 420,
    limit: 500,
    period: "Monthly",
    category: "Essential",
  },
  {
    id: "b3",
    name: "Dining Out",
    current: 280,
    limit: 250,
    period: "Monthly",
    category: "Discretionary",
  },
  {
    id: "b4",
    name: "Entertainment",
    current: 150,
    limit: 200,
    period: "Monthly",
    category: "Discretionary",
  },
  {
    id: "b5",
    name: "Transportation",
    current: 180,
    limit: 250,
    period: "Monthly",
    category: "Essential",
  },
  {
    id: "b6",
    name: "Shopping",
    current: 310,
    limit: 300,
    period: "Monthly",
    category: "Discretionary",
  },
  {
    id: "b7",
    name: "Utilities",
    current: 210,
    limit: 250,
    period: "Monthly",
    category: "Essential",
  },
  {
    id: "b8",
    name: "Subscriptions",
    current: 90,
    limit: 100,
    period: "Monthly",
    category: "Discretionary",
  },
]

export default function BudgetsPage() {
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
            <a href="/dashboard/budgets" className="text-sm font-medium text-primary">
              Budgets
            </a>
            <a href="/dashboard/goals" className="text-sm font-medium text-muted-foreground hover:text-primary">
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
                  <h1 className="text-3xl font-bold tracking-tight">Budget Management</h1>
                  <p className="pt-2 text-muted-foreground">
                    Set and track your spending limits across different categories.
                  </p>
                </div>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Budget Summary</CardTitle>
                  <CardDescription className="pt-2">
                    You're on track with 5 of 8 budgets this month. 3 budgets are currently over their limits.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium text-muted-foreground">Total Budget</span>
                      <span className="pt-2 text-2xl font-bold">$3,150.00</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium text-muted-foreground">Spent So Far</span>
                      <span className="pt-2 text-2xl font-bold">$2,840.00</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium text-muted-foreground">Remaining</span>
                      <span className="pt-2 text-2xl font-bold text-emerald-600">$310.00</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium text-muted-foreground">Budget Health</span>
                      <span className="pt-2 text-2xl font-bold text-amber-500">Good</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {budgets.map((budget) => {
                  const percentage = Math.round((budget.current / budget.limit) * 100)
                  const isOverBudget = budget.current > budget.limit

                  return (
                    <Card key={budget.id} className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{budget.name}</CardTitle>
                            <CardDescription>
                              {budget.category} • {budget.period}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2 flex-1">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Spent</span>
                            <span className={`text-sm font-medium ${isOverBudget ? "text-rose-500" : ""}`}>
                              ${budget.current.toLocaleString()} of ${budget.limit.toLocaleString()}
                            </span>
                          </div>
                          <Progress
                            value={percentage > 100 ? 100 : percentage}
                            className={`h-2 ${isOverBudget ? "bg-rose-200" : ""}`}
                            indicatorClassName={isOverBudget ? "bg-rose-500" : ""}
                          />
                          <div className="flex justify-between items-center text-xs">
                            <span className={`${isOverBudget ? "text-rose-500 font-medium" : "text-muted-foreground"}`}>
                              {isOverBudget
                                ? `$${(budget.current - budget.limit).toLocaleString()} over budget`
                                : `${percentage}% used`}
                            </span>
                            <span className="text-muted-foreground">
                              ${(budget.limit - budget.current).toLocaleString()}{" "}
                              {isOverBudget ? "overspent" : "remaining"}
                            </span>
                          </div>
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

