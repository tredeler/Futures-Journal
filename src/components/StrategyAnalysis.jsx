import React, { useEffect, useState, useMemo } from 'react'
import client from '../lib/sanityClient'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const COLORS = ['#60A5FA','#34D399','#FBBF24','#F87171','#A78BFA']

export default function StrategyAnalysis({entries}){
  const [strategies, setStrategies] = useState([])

  useEffect(()=> {
    let mounted = true
    client.fetch(`*[_type == "strategy"]{_id,title,description,color}`)
      .then(res => { if(mounted) setStrategies(res) })
      .catch(err => { console.warn('Sanity fetch failed', err) })
    return ()=> mounted = false
  },[])

  const stats = useMemo(()=> {
    const map = {}
    entries.forEach(e=>{
      const key = e.strategy || 'Unspecified'
      if(!map[key]) map[key] = {count:0, total:0, wins:0}
      map[key].count += 1
      map[key].total += Number(e.pnl||0)
      if(Number(e.pnl||0) > 0) map[key].wins += 1
    })
    return Object.entries(map).map(([k,v])=>({strategy:k, ...v, avg: v.count? (v.total/v.count):0}))
  },[entries])

  const pieData = stats.map(s=>({name:s.strategy, value: s.total}))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-white dark:bg-slate-800 rounded">
        <h3 className="font-bold mb-2">Strategies (from Sanity)</h3>
        {strategies.length === 0 && <div className="text-sm">No strategies found in your Sanity project (they must be published).</div>}
        <ul className="space-y-2">
          {strategies.map((s,i)=>(
            <li key={s._id} className="p-2 rounded border dark:border-slate-700">
              <div className="font-semibold">{s.title}</div>
              <div className="text-xs">{s.description}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-white dark:bg-slate-800 rounded">
        <h3 className="font-bold mb-2">Performance by Strategy (local journal)</h3>
        {stats.length === 0 && <div className="text-sm">No local journal entries yet.</div>}
        {stats.length > 0 && (
          <div style={{width: '100%', height: 240}}>
            <ResponsiveContainer>
              <PieChart>
                <Pie dataKey="value" data={pieData} nameKey="name" innerRadius={40} outerRadius={80}>
                  {pieData.map((_,i)=> <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-3">
              {stats.map(s=>(
                <div key={s.strategy} className="flex justify-between text-sm py-1 border-t dark:border-slate-700">
                  <div>{s.strategy}</div>
                  <div>{s.count} trades — Total: {s.total.toFixed(2)} — Win%: {s.count? ((s.wins/s.count)*100).toFixed(0):0}%</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
