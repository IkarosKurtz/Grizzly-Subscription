import { createContext } from "react"
import { costState } from "../models/costState"

export const costContext = createContext<costState>({
  cost: 0,
  setCost: () => {},
  subType: "",
  setSubType: () => {},
})
