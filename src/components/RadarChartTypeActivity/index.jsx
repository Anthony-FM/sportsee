// Recharts
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"


function RadarChartTypeActivity({data}){
    return <ResponsiveContainer width="100%" height="100%" >
        <RadarChart   data={data.dataPerformance} margin={{top: 5, right: 60, left: 60, bottom: 5 }}>
            <PolarGrid gridType="polygon" radialLines={false} />
            <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
            <Radar dataKey="value"  fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
    </ResponsiveContainer>
}

export default RadarChartTypeActivity