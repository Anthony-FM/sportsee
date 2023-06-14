// Recharts
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"


function RadarChartTypeActivity({data}){
    console.log(data.dataPerformance)
    return <ResponsiveContainer width="100%" height="100%" >
        <RadarChart   data={data.dataPerformance} margin={{top: 5, right: 50, left: 50, bottom: 5 }}>
            <PolarGrid gridType="polygon" radialLines={false} />
            <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
            <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
    </ResponsiveContainer>
}

export default RadarChartTypeActivity