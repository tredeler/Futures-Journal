import React, { useEffect, useState, useMemo } from 'react'
import Header from './components/Header'
import JournalPage from './components/JournalPage'
import StrategyAnalysis from './components/StrategyAnalysis'
import GoalsPage from './components/GoalsPage'
import SettingsPage from './components/SettingsPage'

export default function App(){
  const [page, setPage] = useState('dashboard')
  const [dark, setDark] = useState(() => localStorage.getItem('fj_theme') === 'dark')
  const [entries, setEntries] = useState(() => {
    try {
      const raw = localStorage.getItem('fj_entries_v1')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  useEffect(()=> {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('fj_theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(()=> {
    localStorage.setItem('fj_entries_v1', JSON.stringify(entries))
  }, [entries])

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <Header page={page} setPage={setPage} dark={dark} toggleDark={() => setDark(!dark)} count={entries.length} />
        <main className="mt-6">
          {page === 'dashboard' && <JournalPage entries={entries} setEntries={setEntries} />}
          {page === 'journal' && <JournalPage entries={entries} setEntries={setEntries} />}
          {page === 'strategies' && <StrategyAnalysis entries={entries} />}
          {page === 'goals' && <GoalsPage />}
          {page === 'settings' && <SettingsPage entries={entries} setEntries={setEntries} />}
        </main>
      </div>
    </div>
  )
}
