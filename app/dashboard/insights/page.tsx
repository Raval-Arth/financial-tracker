import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardNav } from "@/components/dashboard-nav"
import {
  ArrowDownIcon as ArrowTrendingDown,
  ArrowUpIcon as ArrowTrendingUp,
  BrainCircuit,
  PieChartIcon as ChartPieIcon,
  LightbulbIcon,
  SparklesIcon,
  BookmarkIcon,
  RefreshCw,
} from "lucide-react"

const insights = [
  {
    id: "i1",
    title: "Unusual Spending Pattern",
    description:
      "Your dining expenses increased by 45% this month compared to your 6-month average. Consider setting a specific budget for dining out to keep your expenses in check.",
    type: "alert",
    icon: ArrowTrendingUp,
    category: "Spending",
    date: "Today",
  },
  {
    id: "i2",
    title: "Saving Opportunity",
    description:
      "Based on your spending patterns, you could save $120/month by optimizing your subscription services. We've identified 3 subscriptions you rarely use that could be cancelled.",
    type: "opportunity",
    icon: LightbulbIcon,
    category: "Optimization",
    date: "Today",
  },
  {
    id: "i3",
    title: "Budget Forecast",
    description:
      "At your current rate, you'll exceed your entertainment budget by $75 this month. Consider reducing entertainment expenses for the next two weeks to stay within budget.",
    type: "forecast",
    icon: ChartPieIcon,
    category: "Budgeting",
    date: "Yesterday",
  },
  {
    id: "i4",
    title: "Smart Recommendation",
    description:
      "Moving $200 from your checking to your savings account would optimize your interest earnings without affecting your monthly cash flow needs.",
    type: "recommendation",
    icon: SparklesIcon,
    category: "Optimization",
    date: "Yesterday",
  },
  {
    id: "i5",
    title: "Positive Trend",
    description:
      "Your grocery spending has decreased by 12% over the last 3 months. Great job sticking to your grocery budget and meal planning!",
    type: "positive",
    icon: ArrowTrendingDown,
    category: "Spending",
    date: "2 days ago",
  },
  {
    id: "i6",
    title: "Goal Acceleration",
    description:
      "Based on your current savings rate, you could reach your 'Emergency Fund' goal 2 months earlier by increasing your monthly contribution by just $50.",
    type: "recommendation",
    icon: SparklesIcon,
    category: "Goals",
    date: "3 days ago",
  },
  {
    id: "i7",
    title: "Recurring Charge Alert",
    description:
      "We've detected a new recurring charge of $19.99 from 'Premium Subscription'. Make sure this is a service you intended to sign up for.",
    type: "alert",
    icon: ArrowTrendingUp,
    category: "Monitoring",
    date: "4 days ago",
  },
  {
    id: "i8",
    title: "Income Opportunity",
    description:
      "Based on your skills and market research, you could potentially increase your income by 15-20% by exploring freelance opportunities in your field.",
    type: "opportunity",
    icon: LightbulbIcon,
    category: "Income",
    date: "5 days ago",
  },
]

export default function InsightsPage() {
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
            <a href="/dashboard/goals" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Goals
            </a>
            <a href="/dashboard/insights" className="text-sm font-medium text-primary">
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
                  <h1 className="text-3xl font-bold tracking-tight">AI-Powered Insights</h1>
                  <p className="text-muted-foreground">Personalized financial recommendations based on your data.</p>
                </div>
                <div className="flex gap-2">
                </div>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                    <CardTitle>How AI Generates Your Insights</CardTitle>
                  </div>
                  <CardDescription>
                    Our AI analyzes your financial data to identify patterns, opportunities, and potential issues. These
                    insights are personalized to your specific financial situation and goals.
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                {insights.map((insight) => (
                  <Card key={insight.id} className="overflow-hidden">
                    <CardContent className="p-6 flex gap-4 items-start">
                      <div
                        className={`rounded-full p-3 flex-shrink-0 ${insight.type === "alert"
                            ? "bg-rose-100 text-rose-700"
                            : insight.type === "opportunity"
                              ? "bg-emerald-100 text-emerald-700"
                              : insight.type === "forecast"
                                ? "bg-amber-100 text-amber-700"
                                : insight.type === "positive"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-blue-100 text-blue-700"
                          }`}
                      >
                        <insight.icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{insight.title}</h4>
                            <span className="text-xs text-muted-foreground">{insight.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 bg-muted rounded-full">{insight.category}</span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${insight.type === "alert"
                                  ? "bg-rose-100 text-rose-700"
                                  : insight.type === "opportunity"
                                    ? "bg-emerald-100 text-emerald-700"
                                    : insight.type === "forecast"
                                      ? "bg-amber-100 text-amber-700"
                                      : insight.type === "positive"
                                        ? "bg-emerald-100 text-emerald-700"
                                        : "bg-blue-100 text-blue-700"
                                }`}
                            >
                              {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{insight.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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

