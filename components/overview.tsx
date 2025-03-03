"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    income: 3200,
    expenses: 2100,
  },
  {
    name: "Feb",
    income: 3400,
    expenses: 2300,
  },
  {
    name: "Mar",
    income: 3800,
    expenses: 2600,
  },
  {
    name: "Apr",
    income: 4000,
    expenses: 2800,
  },
  {
    name: "May",
    income: 4200,
    expenses: 2900,
  },
  {
    name: "Jun",
    income: 4200,
    expenses: 2840,
  },
]

export function Overview() {
  const { theme } = useTheme()

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === "dark" ? "#333" : "#eee"} />
        <XAxis
          dataKey="name"
          stroke={theme === "dark" ? "#888" : "#888"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke={theme === "dark" ? "#888" : "#888"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme === "dark" ? "#1f1f1f" : "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
          itemStyle={{
            fontSize: "12px",
            padding: "4px 0",
          }}
          formatter={(value) => [`$${value}`, ""]}
        />
        <Bar dataKey="income" name="Income" fill="#22c55e" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expenses" name="Expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

