import './OptionPay.css'
import '../../models/SubCost'
import { SubCost } from '../../models/SubCost'
import { useCostContext } from '../../Context/useCostContext'

export function OptionPay({SubType,Cost,isSelected,onSelect}:SubCost & {isSelected:boolean,onSelect:() => void}){

    const {setCost,setSubType} = useCostContext()

    return(
        <div className={`grid ${isSelected ? "select" : "no-select"}`} onClick={() => {
            setCost(Cost)
            setSubType(SubType)
            onSelect()
        }}>
                <div className='left'>
                <span className='dot'>
                    <span className='dot2'></span>
                </span>
            </div>
            <div className='right'>
                <div className='half'>
                    <h4>Pay {SubType}</h4>
                </div>
                <div className='half'>
                    <h5>${Cost} / Month / Member</h5>
                </div>
            </div>
        </div>
    )
}