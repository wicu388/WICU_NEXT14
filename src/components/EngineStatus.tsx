"use client"

import { useEffect, useState } from "react"

export function EngineStatus() {
  const [engine, setEngine] = useState<any>(null)

  useEffect(() => {
    fetch("/api/ping")
      .then(res => res.json())
      .then(data => setEngine(data.engine))
  }, [])

  if (!engine) return <p>Loading engine...</p>

  return (
    <div className="border p-4 rounded">
      <h3>WICU Engine</h3>
      <p>Mode: <b>{engine.mode}</b></p>
      <p>Last ping: {new Date(engine.lastPing).toLocaleString()}</p>
    </div>
  )
}
