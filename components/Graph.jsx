import React from 'react'; 
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'; 

const Graph = () => {
    const data = [
        {
        name: 'Page A', 
        uv: 29, pv: 2400, 
        amt: 2400
        }, 
        {
        name: 'Page A', 
        uv: 100, pv: 2400, 
        amt: 2400
        }, 
        {
        name: 'Page A', 
        uv: 300, pv: 2400, 
        amt: 2400
        }, 
        {
        name: 'Page A', 
        uv: 200, pv: 2400, 
        amt: 2400
        }, 
        {
        name: 'Page A', 
        uv: 100, pv: 2400, 
        amt: 2400
        }, 
    ];
  return (
    <div className="h-[500px] flex items-center justify-center">
    <div className="bg-white w-[80%] flex items-center justify-center h-[80%] rounded-lg shadow-md">
    <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{top:5, right: 20, bottom: 5, left: 0}}
    >
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stoke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKeys="name" />
    <YAxis />
    <Tooltip />


    </LineChart> 

    </div>
  

   

    </div>
  )
}

export default Graph; 