import React from 'react'

export default function Header({page, setPage, dark, toggleDark, count}){
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">FJ</div>
        <nav className="space-x-3">
          <button className={`px-3 py-2 ${page==='dashboard'?'bg-slate-200 dark:bg-slate-800 rounded':''}`} onClick={()=>setPage('dashboard')}>Dashboard</button>
          <button className={`px-3 py-2 ${page==='journal'?'bg-slate-200 dark:bg-slate-800 rounded':''}`} onClick={()=>setPage('journal')}>Journal</button>
          <button className={`px-3 py-2 ${page==='strategies'?'bg-slate-200 dark:bg-slate-800 rounded':''}`} onClick={()=>setPage('strategies')}>Strategy Analysis</button>
          <button className={`px-3 py-2 ${page==='goals'?'bg-slate-200 dark:bg-slate-800 rounded':''}`} onClick={()=>setPage('goals')}>Goals & Notes</button>
          <button className={`px-3 py-2 ${page==='settings'?'bg-slate-200 dark:bg-slate-800 rounded':''}`} onClick={()=>setPage('settings')}>Settings</button>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-sm">Entries: {count}</div>
        <button onClick={toggleDark} aria-label="toggle theme" className="px-3 py-2 rounded bg-slate-100 dark:bg-slate-800">
          {dark ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}
