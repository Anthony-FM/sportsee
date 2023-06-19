// Recharts
import { LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line } from "recharts"
// CSS
import './index.css'


function LineChartAverageSession({data}){
    console.log(data.sessions)

    function CustomTooltip({active, payload}){
      if(active && payload){
          return (<div className='tooltipLineChart'>
              <p>{`${payload[0].value}mn`}</p>
              
          </div>)
      }
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
        <Tooltip content={<CustomTooltip/>} cursor={{ stroke: "#000", strokeOpacity:0.1, strokeWidth: "20%"}} />
        
        <Line type="natural" dataKey="sessionLength" stroke="#FFF" strokeOpacity={0.4} strokeWidth={2} dot={false} activeDot={{ r: 4 }} />

      </LineChart>
  </ResponsiveContainer>
}

export default LineChartAverageSession