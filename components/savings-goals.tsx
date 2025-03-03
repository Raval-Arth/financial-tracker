import { Progress } from "@/components/ui/progress"

const goals = [
  {
    id: "g1",
    name: "Emergency Fund",
    current: 4500,
    target: 10000,
    dueDate: "Dec 2024",
  },
  {
    id: "g2",
    name: "Vacation",
    current: 1200,
    target: 3000,
    dueDate: "Aug 2024",
  },
  {
    id: "g3",
    name: "New Laptop",
    current: 800,
    target: 1500,
    dueDate: "Jul 2024",
  },
]

export function SavingsGoals() {
  return (
    <div className="space-y-6">
      {goals.map((goal) => {
        const percentage = Math.round((goal.current / goal.target) * 100)

        return (
          <div key={goal.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium">{goal.name}</h4>
              <span className="text-xs text-muted-foreground">Due: {goal.dueDate}</span>
            </div>
            <Progress value={percentage} className="h-2" />
            <div className="flex justify-between items-center text-xs">
              <span>
                ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
              </span>
              <span
                className={
                  percentage >= 75 ? "text-emerald-500" : percentage >= 50 ? "text-amber-500" : "text-rose-500"
                }
              >
                {percentage}%
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

