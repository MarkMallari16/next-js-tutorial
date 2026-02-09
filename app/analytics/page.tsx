import LineChart from "./line-chart"
import SalesChart from "./sales-chart"

const page = () => {

    const chartData = [
        { month: "January", desktop: 186, mobile: 80, laptop: 120 },
        { month: "February", desktop: 305, mobile: 200, laptop: 120 },
        { month: "March", desktop: 237, mobile: 120, laptop: 120 },
        { month: "April", desktop: 73, mobile: 190, laptop: 120 },
        { month: "May", desktop: 209, mobile: 130, laptop: 120 },
        { month: "June", desktop: 214, mobile: 140, laptop: 120 },
    ]

    const lineChartData = [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 305 },
        { month: "March", desktop: 237 },
        { month: "April", desktop: 73 },
        { month: "May", desktop: 209 },
        { month: "June", desktop: 214 },
    ]

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center pt-2">Basic Chart Analytics</h1>
            <div>
                <SalesChart data={chartData} />
            </div>
            <div>
                <LineChart data={lineChartData} />
            </div>
        </div>
    )
}

export default page