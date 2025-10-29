import React, { useState } from 'react'
import { saveAs } from './utils'

function emptyEntry(){
  return { id: Date.now(), symbol: '', entry: '', exit: '', size: 0, pnl: 0, notes: '', strategy: '' }
}

export default function JournalPage({entries, setEntries}){
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(emptyEntry())

  function add(){
    setEntries([form, ...entries])
    setForm(emptyEntry())
  }
  function remove(id){
    setEntries(entries.filter(e=>e.id !== id))
  }
  function startEdit(e){
    setEditing(e.id); setForm(e)
  }
  function saveEdit(){
    setEntries(entries.map(en => en.id === form.id ? form : en))
    setEditing(null)
    setForm(emptyEntry())
  }

  function exportCSV(){
    const header = ['id','symbol','entry','exit','size','pnl','strategy','notes']
    const rows = entries.map(r=>[r.id,r.symbol,r.entry,r.exit,r.size,r.pnl,r.strategy, (r.notes||'').replace(/\n/g,' ')] )
    const csv = [header, ...rows].map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n')
    const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'futures-journal.csv';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white dark:bg-slate-800 rounded">
          <h3 className="font-bold mb-2">New Entry</h3>
          <input placeholder="Symbol" value={form.symbol} onChange={e=>setForm({...form,symbol:e.target.value})} className="w-full mb-2 p-2 rounded"/>
          <input placeholder="Entry price" value={form.entry} onChange={e=>setForm({...form,entry:e.target.value})} className="w-full mb-2 p-2 rounded"/>
          <input placeholder="Exit price" value={form.exit} onChange={e=>setForm({...form,exit:e.target.value})} className="w-full mb-2 p-2 rounded"/>
          <input placeholder="Size" type="number" value={form.size} onChange={e=>setForm({...form,size: Number(e.target.value)})} className="w-full mb-2 p-2 rounded"/>
          <input placeholder="PnL" type="number" value={form.pnl} onChange={e=>setForm({...form,pnl: Number(e.target.value)})} className="w-full mb-2 p-2 rounded"/>
          <input placeholder="Strategy" value={form.strategy} onChange={e=>setForm({...form,strategy:e.target.value})} className="w-full mb-2 p-2 rounded"/>
          <textarea placeholder="Notes" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} className="w-full mb-2 p-2 rounded"></textarea>
          {!editing ? <button onClick={add} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
            : <button onClick={saveEdit} className="px-4 py-2 bg-green-600 text-white rounded">Save</button>}
        </div>
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold">Entries</h3>
            <div className="space-x-2">
              <button onClick={exportCSV} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded">Export CSV</button>
            </div>
          </div>
          <div className="space-y-2">
            {entries.length === 0 && <div className="p-4 bg-white dark:bg-slate-800 rounded">No entries yet.</div>}
            {entries.map(e => (
              <div key={e.id} className="p-3 bg-white dark:bg-slate-800 rounded flex justify-between">
                <div>
                  <div className="font-semibold">{e.symbol} — {e.strategy || '—'}</div>
                  <div className="text-sm">P&L: {e.pnl} | Size: {e.size}</div>
                  <div className="text-xs mt-1">{e.notes}</div>
                </div>
                <div className="flex flex-col space-y-2">
                  <button onClick={()=>startEdit(e)} className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded">Edit</button>
                  <button onClick={()=>remove(e.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
