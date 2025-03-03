import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowUpIcon as ArrowTrendingUp,
  BrainCircuit,
  PieChartIcon as ChartPieIcon,
  LightbulbIcon,
  SparklesIcon,
} from "lucide-react"

const insights = [
  {
    id: "i1",
    title: "Unusual Spending Pattern",
    description: "Your dining expenses increased by 45% this month compared to your 6-month average.",
    type: "alert",
    icon: ArrowTrendingUp,
  },
  {
    id: "i2",
    title: "Saving Opportunity",
    description: "Based on your spending patterns, you could save $120/month by optimizing your subscription services.",
    type: "opportunity",
    icon: LightbulbIcon,
  },
  {
    id: "i3",
    title: "Budget Forecast",
    description: "At your current rate, you'll exceed your entertainment budget by $75 this month.",
    type: "forecast",
    icon: ChartPieIcon,
  },
  {
    id: "i4",
    title: "Smart Recommendation",
    description: "Moving $200 from your checking to your savings account would optimize your interest earnings.",
    type: "recommendation",
    icon: SparklesIcon,
  },
]

export function AIInsights() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <BrainCircuit className="h-5 w-5 text-primary" />
        <p className="text-sm text-muted-foreground">Powered by AI analysis of your financial data</p>
      </div>

      <div className="grid gap-3">
        {insights.map((insight) => (
          <Card key={insight.id} className="overflow-hidden">
            <CardContent className="p-4 flex gap-3 items-start">
              <div
                className={`rounded-full p-2 ${
                  insight.type === "alert"
                    ? "bg-rose-100 text-rose-700"
                    : insight.type === "opportunity"
                      ? "bg-emerald-100 text-emerald-700"
                      : insight.type === "forecast"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-blue-100 text-blue-700"
                }`}
              >
                <insight.icon className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium">{insight.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {insight.type === "alert"
                      ? "Alert"
                      : insight.type === "opportunity"
                        ? "Opportunity"
                        : insight.type === "forecast"
                          ? "Forecast"
                          : "Recommendation"}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{insight.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

