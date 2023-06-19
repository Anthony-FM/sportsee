import {  ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts"
//CSS
import "./index.css"

function RadialBarChartScore({data}){
    let scores = [
        {
            score: data,
            fill: "#FF0000",
        },{
            score: "100",            
            fill: "#FFF"
            
        }
    ]

    function CustomLegend(payload){
        console.log(payload.payload[0].payload.score)
        return <div className="radialBarChart-circle">
                <span className="radialBarChart-title">{payload.payload[0].payload.score}% <br /></span>
                de votre<br /> objectif
            </div>
    }

    const style = {
        width: "100%",
        height: "100%",
        display: "flex",
        top: "0px",
        left: "0px",
        alignItems: "center",
        placeContent: "center"
    }
    
    
    return <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
            
            innerRadius="70%" 
            outerRadius="50%"
            data={scores}  
            startAngle={80} 
            endAngle={440}     
        >
         <circle cx="50%" cy="50%" fill="white" r="50"></circle>
          <RadialBar 
            legendType="line"             
            dataKey="score"  
            cornerRadius="10"          
          />

          <Legend content={<CustomLegend/>} verticalAlign="middle" width="100%" height="100%" align="center" wrapperStyle={style}/>
         
        </RadialBarChart>
    </ResponsiveContainer>
}

export default RadialBarChartScore