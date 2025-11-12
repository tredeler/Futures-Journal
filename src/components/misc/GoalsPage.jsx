import React, { useEffect, useState } from 'react'
import client from '../../lib/sanityClient'

export default function GoalsPage(){
  const [doc, setDoc] = useState(null)

  useEffect(()=> {
    let mounted = true
    client.fetch(`*[_type == "siteSettings"][0]{title,welcome}`)
      .then(res => { if(mounted) setDoc(res) })
      .catch(err => console.warn(err))
    return ()=> mounted = false
  },[])

  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded">
      <h3 className="font-bold mb-2">Goals & Notes</h3>
      {!doc && <div className="text-sm">No goals or notes found in Sanity (create a Site settings doc named "Site settings").</div>}
      {doc && (
        <div>
          <h4 className="font-semibold">{doc.title}</h4>
          <p className="mt-2 text-sm">{doc.welcome}</p>
          <div className="mt-3 text-xs text-slate-500">Edit this content inside your Sanity Studio (siteSettings document).</div>
        </div>
      )}
    </div>
  )
}
