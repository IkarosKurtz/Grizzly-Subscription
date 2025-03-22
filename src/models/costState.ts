import { Dispatch, SetStateAction } from "react"

export interface costState{
    cost:number
    setCost: Dispatch<SetStateAction<number>>
    subType:string
    setSubType: Dispatch<SetStateAction<string>>
}