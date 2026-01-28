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


    return (
        <div>
            <SalesChart data={chartData} />
        </div>
    )
}

export default page