import './index.css'
//recharts
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


function DailyActivity({sessions}){

    function CustomTooltip({active, payload}){
        if(active && payload){
            return (<div className='tooltip'>
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
            </div>)
        }
    }
    
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sessions}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="day" tickLine={false}/>
            <YAxis dataKey="kg" orientation='right' type='number' yAxisId="kg" axisLine={false} tickLine={false} domain={["dataMin-5", "dataMax+5"]}/>
            <YAxis dataKey="calories" hide={true} orientation='left' type='number' yAxisId="calories" domain={[0, "dataMax+20"]} />
            <Tooltip content={<CustomTooltip/>}/>
            <Bar dataKey="kg" fill="#282D30" radius={[10, 10, 0 ,0]} yAxisId="kg" legendType='none' barSize={7}/>
            <Bar dataKey="calories" fill=" #E60000" radius={[10, 10, 0 ,0]} yAxisId="calories"  legendType='none' barSize={7}/> 
        </BarChart>
    </ResponsiveContainer >
}

export default DailyActivity