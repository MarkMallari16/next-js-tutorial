"use client"

import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

type SalesChartProps = {
    data: {
        month: string;
        desktop: number;
        mobile: number;
        laptop: number;
    }[]
}

const SalesChart = ({ data }: SalesChartProps) => {
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
        laptop: {
            label: "Laptop",
            color: "#1f1f1f",
        },
    }
    return (
        <>
            <h1 className="font-bold text-2xl">Sales past months</h1>
            <ChartContainer config={chartConfig} className="min-h-50 lg:w-80">
                <BarChart data={data}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent/>}/>
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={3} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={3} />
                </BarChart>
            </ChartContainer>
        </>
    )
}

export default SalesChart