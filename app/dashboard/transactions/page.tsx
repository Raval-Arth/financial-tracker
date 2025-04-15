import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardNav } from "@/components/dashboard-nav"
import {
  ArrowDownLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Coffee,
  CreditCard,
  Download,
  Filter,
  Home,
  Plus,
  Search,
  ShoppingBag,
} from "lucide-react"

export default function TransactionsPage() {
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
            <a href="/dashboard/transactions" className="text-sm font-medium text-primary">
              Transactions
            </a>
            <a href="/dashboard/budgets" className="text-sm font-medium text-muted-foreground hover:text-primary">
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
                  <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
                  <p className="text-muted-foreground">View and manage all your financial transactions.</p>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>All Transactions</CardTitle>
                  <CardDescription>A complete list of all your financial activities.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                    <div className="flex items-center w-full md:w-auto">
                      <div className="relative w-full md:w-80">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search transactions..." className="w-full pl-8" />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        March 2024
                      </Button>
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Description</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mr-2">
                                <Coffee className="h-4 w-4" />
                              </div>
                              Starbucks Coffee
                            </div>
                          </TableCell>
                          <TableCell>Food & Drink</TableCell>
                          <TableCell>Today, 10:30 AM</TableCell>
                          <TableCell className="text-right text-rose-600">-$4.50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mr-2">
                                <ShoppingBag className="h-4 w-4" />
                              </div>
                              Amazon Purchase
                            </div>
                          </TableCell>
                          <TableCell>Shopping</TableCell>
                          <TableCell>Yesterday, 2:20 PM</TableCell>
                          <TableCell className="text-right text-rose-600">-$67.95</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-2">
                                <ArrowDownLeft className="h-4 w-4" />
                              </div>
                              Salary Deposit
                            </div>
                          </TableCell>
                          <TableCell>Income</TableCell>
                          <TableCell>Mar 1, 9:00 AM</TableCell>
                          <TableCell className="text-right text-emerald-600">+$2,100.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mr-2">
                                <Home className="h-4 w-4" />
                              </div>
                              Rent Payment
                            </div>
                          </TableCell>
                          <TableCell>Housing</TableCell>
                          <TableCell>Mar 1, 12:00 PM</TableCell>
                          <TableCell className="text-right text-rose-600">-$1,200.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mr-2">
                                <CreditCard className="h-4 w-4" />
                              </div>
                              Netflix Subscription
                            </div>
                          </TableCell>
                          <TableCell>Entertainment</TableCell>
                          <TableCell>Feb 28, 6:15 PM</TableCell>
                          <TableCell className="text-right text-rose-600">-$14.99</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mr-2">
                                <CreditCard className="h-4 w-4" />
                              </div>
                              Gym Membership
                            </div>
                          </TableCell>
                          <TableCell>Health & Fitness</TableCell>
                          <TableCell>Feb 27, 8:00 AM</TableCell>
                          <TableCell className="text-right text-rose-600">-$45.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mr-2">
                                <ShoppingBag className="h-4 w-4" />
                              </div>
                              Grocery Store
                            </div>
                          </TableCell>
                          <TableCell>Groceries</TableCell>
                          <TableCell>Feb 26, 5:30 PM</TableCell>
                          <TableCell className="text-right text-rose-600">-$89.74</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-2">
                                <ArrowDownLeft className="h-4 w-4" />
                              </div>
                              Freelance Payment
                            </div>
                          </TableCell>
                          <TableCell>Income</TableCell>
                          <TableCell>Feb 25, 3:45 PM</TableCell>
                          <TableCell className="text-right text-emerald-600">+$350.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className="flex items-center justify-center space-x-2 py-4">
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="px-4">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="px-4">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="px-4">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
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

