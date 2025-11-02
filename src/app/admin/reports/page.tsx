"use client"

import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { membershipData, revenueData } from "@/lib/data"
import { FileDown } from "lucide-react";

export default function ReportsPage() {
  const revenueChartConfig = {
    revenue: {
      label: "Revenue",
      color: "hsl(var(--chart-1))",
    },
  }
  const membershipChartConfig = {
    count: {
      label: "Members",
      color: "hsl(var(--chart-2))",
    },
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-headline">Reports & Analytics</h1>
          <p className="text-muted-foreground">Visualize your gym's performance.</p>
        </div>
        <Button>
          <FileDown className="mr-2 h-4 w-4" />
          Export Reports
        </Button>
      </div>
      <div className="grid gap-6 mt-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueChartConfig} className="min-h-[200px] w-full">
              <BarChart accessibilityLayer data={revenueData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Membership Growth</CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={membershipChartConfig} className="min-h-[200px] w-full">
              <LineChart accessibilityLayer data={membershipData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Line
                  dataKey="count"
                  type="monotone"
                  stroke="var(--color-count)"
                  strokeWidth={2}
                  dot={true}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
