import React, { useEffect } from 'react'
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';



function SmsChart({ data }) {
  let GraphDataCounter = {}
  data.forEach(d => {
    let date = d.date.split(' ')[0]
    if (GraphDataCounter[date] == null) {
      GraphDataCounter[date] = []
    }
    GraphDataCounter[date].push('count')
  });

  let GraphData = []
  Object.keys(GraphDataCounter).map((key, c) => {
    //2022-04-13
    let date = key.split('-')
    date = new Date(date[0], date[1] - 1, date[2])
    date = date.getTime()/1000

    let pushData = { date, count: GraphDataCounter[key].length }
    GraphData.push(pushData)
    return
  })

  return (
    <div>
      <h1 className="text-heading">
        Dashboard
      </h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={GraphData} margin={{ right: 50 }}>
          <CartesianGrid />
          <XAxis dataKey="date"
            interval={'preserveStartEnd'} tickFormatter={(v, i) => {
              let nd = new Date(v*1000)
              return nd.toLocaleDateString()
            }} />
          <YAxis dataKey="count" ></YAxis>
          <Legend />
          <Tooltip label="count" labelFormatter={(v)=>{
            let nd = new Date(v*1000)
            return nd.toLocaleDateString()
          }}/>
          <Line dataKey="count"
            stroke="black" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SmsChart