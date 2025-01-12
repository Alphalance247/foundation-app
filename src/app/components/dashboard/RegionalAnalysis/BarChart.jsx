"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import BestAnalytics from "./BestAnalytics";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "july", desktop: 212 },
  { month: "August", desktop: 214 },
  { month: "September", desktop: 221 },
  { month: "October", desktop: 214 },
  { month: "November", desktop: 111 },
  { month: "December", desktop: 111 },
  { month: "January", desktop: 111 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

export default function Chart() {
  return (
    <Card className="bg-none shadow-none rounded-lg border-none">
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="grid grid-cols-[70%auto] items-end gap-x-2">
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="#B9B9B9" radius={8} />
          </BarChart>
        </ChartContainer>

        {/* <CardFooter className="flex-col items-start gap-2 text-sm"> */}

        {/* <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-2 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div> */}
        {/* </CardFooter> */}
        <div className="flex flex-col gap-y-6 gap-2 text-sm">
          {/* <Image
            src="/assets/f1.png"
            width={128}
            height={72}
            className="w-full"
            alt="analytics"
          /> */}
          <BestAnalytics />
          <BestAnalytics />
          {/* <Image
            src="/assets/f2.png"
            width={128}
            height={72}
            className="w-full"
            alt="analytics"
          /> */}
        </div>
      </CardContent>
    </Card>
  );
}
