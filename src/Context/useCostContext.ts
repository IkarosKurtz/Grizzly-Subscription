import { useContext } from "react";
import { costContext } from "./costContext";

export function useCostContext(){
    const context = useContext(costContext)

    if(context === undefined){
        throw new Error(
            "useCostContext must be used within a costProvider"
        )
    }

    return context
}