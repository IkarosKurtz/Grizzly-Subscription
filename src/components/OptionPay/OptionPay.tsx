import './OptionPay.css'
import '../../models/SubCost'
import { SubCost } from '../../models/SubCost'
import { useCostContext } from '../../Context/useCostContext'

export function OptionPay({SubType,Cost}:SubCost){

    const {setCost,setSubType} = useCostContext()

    return(
        <div className='grid' onClick={() => {
            setCost(Cost)
            setSubType(SubType)
        }}>
            <div className='left'>
                <span className='dot'></span>
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