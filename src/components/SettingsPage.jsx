import React from 'react'

export default function SettingsPage({entries, setEntries}){
  function clearAll(){
    if(!confirm('Clear all local journal entries? This cannot be undone.')) return
    setEntries([])
    localStorage.removeItem('fj_entries_v1')
  }

  function backup(){
    const blob = new Blob([JSON.stringify(entries, null, 2)], {type: 'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'futures-journal-backup.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded">
      <h3 className="font-bold mb-2">Settings</h3>
      <button onClick={backup} className="px-3 py-2 bg-slate-200 dark:bg-slate-700 rounded mr-2">Backup journal</button>
      <button onClick={clearAll} className="px-3 py-2 bg-red-600 text-white rounded">Clear all local data</button>
      <div className="mt-4 text-xs text-slate-500">Note: Strategies & Goals are managed in Sanity Studio.</div>
    </div>
  )
}
