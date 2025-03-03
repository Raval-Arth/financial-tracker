import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowDownLeft, Coffee, CreditCard, Home, ShoppingBag } from "lucide-react"

const transactions = [
  {
    id: "t1",
    description: "Starbucks Coffee",
    amount: -4.5,
    date: "Today, 10:30 AM",
    category: "Food & Drink",
    icon: Coffee,
  },
  {
    id: "t2",
    description: "Amazon Purchase",
    amount: -67.95,
    date: "Yesterday, 2:20 PM",
    category: "Shopping",
    icon: ShoppingBag,
  },
  {
    id: "t3",
    description: "Salary Deposit",
    amount: 2100.0,
    date: "Mar 1, 9:00 AM",
    category: "Income",
    icon: ArrowDownLeft,
  },
  {
    id: "t4",
    description: "Rent Payment",
    amount: -1200.0,
    date: "Mar 1, 12:00 PM",
    category: "Housing",
    icon: Home,
  },
  {
    id: "t5",
    description: "Netflix Subscription",
    amount: -14.99,
    date: "Feb 28, 6:15 PM",
    category: "Entertainment",
    icon: CreditCard,
  },
]

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className={`h-9 w-9 ${transaction.amount > 0 ? "bg-emerald-100" : "bg-rose-100"}`}>
              <AvatarFallback className={`${transaction.amount > 0 ? "text-emerald-700" : "text-rose-700"}`}>
                <transaction.icon className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{transaction.description}</p>
              <p className="text-xs text-muted-foreground">{transaction.category}</p>
              <p className="text-xs text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
          <div className={`text-sm font-medium ${transaction.amount > 0 ? "text-emerald-600" : "text-rose-600"}`}>
            {transaction.amount > 0 ? "+" : ""}
            {transaction.amount.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}

