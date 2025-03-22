import "./PaymentOptions.css"
import { OptionPay } from "../OptionPay/OptionPay"
import { Subs } from "../../info/Subs"
import { useCostContext } from "../../Context/useCostContext"

export function PaymentOptions(){

    const {cost,subType} = useCostContext()
    return(
        <div className="select-plan">
            <h2 className="title">Starter Plan</h2>
            {Subs.map((sub,idx) => {
                return(<OptionPay key={idx} {...sub}/>)
            })}
            <hr className="separador"/>

            <div className="result">
                <h3>{subType}</h3>
                <div className="total">
                    <h3 className="leftTot">Total</h3>
                    <h3 className="rightTot">{cost} / Month</h3>
                </div>
            </div>
        </div>
    )
}