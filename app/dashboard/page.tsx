import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentTransactions } from "@/components/recent-transactions"
import { SavingsGoals } from "@/components/savings-goals"
import { AIInsights } from "@/components/ai-insights"
import { DashboardNav } from "@/components/dashboard-nav"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" >
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
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link
              href="/dashboard/transactions"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Transactions
            </Link>
            <Link href="/dashboard/budgets" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Budgets
            </Link>
            <Link href="/dashboard/goals" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Goals
            </Link>
            <Link href="/dashboard/insights" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Insights
            </Link>
          </nav>
          {/* <Button size="sm" className="hidden md:flex">
            Connect Account
          </Button> */}
        </div>
      </header>
      <div className="flex-1 flex">
        <DashboardNav className="hidden md:block" />
        <main className="flex-1">
          <section className="container py-6 md:py-10">
            <div className="grid gap-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Financial Dashboard</h1>
                  <p className="text-muted-foreground">
                    Track, analyze, and optimize your finances with AI-powered insights.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$12,580.00</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500">↑ 2.5%</span> from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$4,200.00</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500">↑ 4.3%</span> from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,840.00</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-rose-500">↑ 5.1%</span> from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">32.4%</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500">↑ 1.2%</span> from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Financial Overview</CardTitle>
                    <CardDescription>Your income and expenses over the last 6 months.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your latest financial activities.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentTransactions />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/dashboard/transactions">
                        View All Transactions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Savings Goals</CardTitle>
                    <CardDescription>Track your progress towards financial goals.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SavingsGoals />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/dashboard/goals">
                        Manage Goals
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>AI-Powered Insights</CardTitle>
                    <CardDescription>Personalized recommendations based on your financial behavior.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AIInsights />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/dashboard/insights">
                        View Detailed Insights
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FinSmart. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

