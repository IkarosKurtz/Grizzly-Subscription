import React, { useState } from "react"
import { costContext } from "./costContext"

export function CostProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) {
  const [cost, setCost] = useState(0)
  const [subType, setSubType] = useState("")
  return (
    <costContext.Provider value={{ cost, setCost, subType, setSubType }}>
      {children}
    </costContext.Provider>
  )
}
