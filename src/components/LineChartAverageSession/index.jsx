// Recharts
import { LineChart, ResponsiveContainer, XAxis, Tooltip, Line } from "recharts"
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
          top: 100,
          right: 30,
          left: 30,
          bottom: 5,
        }}
      >

        <XAxis dataKey="day" axisLine={false} tickLine={false}/>
        <Tooltip content={CustomTooltip}/>
        <Line type="natural" dataKey="sessionLength" stroke="#FFF" strokeOpacity={0.4} strokeWidth={2} dot={false} activeDot={{ r: 4 }}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="1" y2="1" >
              <stop offset="0%" stopColor="#FFF" stopOpacity={0.4}/>
              <stop offset="0%" stopColor="#FFF" stopOpacity={1}/>
            </linearGradient>
          </defs>  
        </Line>

      </LineChart>
  </ResponsiveContainer>
}

export default LineChartAverageSession