// Recharts
import { LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line, Rectangle } from "recharts"
// CSS
import './index.css'


function LineChartAverageSession({data}){

  function CustomTooltip({active, payload}){
    if(active && payload){
        return (<div className='tooltipLineChart'>
            <p>{`${payload[0].value}mn`}</p>
            
        </div>)
    }
  }

  function CustomCursor({points}){
    return <Rectangle fill="#000000" opacity={0.2} x={points[1].x} width={1000} height={300} />;
  }
    return <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data.sessions}
        margin={{
          top: 0,
          right: 15,
          left: 15,
          bottom: -30,
        }}
      >

        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#FFFFFF', opacity: '0.5' }} tickMargin={-30}/>
        <YAxis axisLine={false} tickLine={false} domain={["dataMin - 40", "dataMax+100"]} hide={true}/>
        <Tooltip content={<CustomTooltip/>} cursor={<CustomCursor/>} />        
        <Line type="natural" dataKey="sessionLength" stroke="#FFF" strokeOpacity={0.4} strokeWidth={2} dot={false} activeDot={{ r: 4 }} />

      </LineChart>
  </ResponsiveContainer>
}

export default LineChartAverageSession