import "./PaymentOptions.css"
import { OptionPay } from "../OptionPay/OptionPay"

export function PaymentOptions(){
    return(
        <div className="select-plan">
            <h2 className="title">Starter Plan</h2>
            <OptionPay/>
            <hr className="separador"/>
            <div className="total">
                <h3 className="left">Total</h3>
                <h3 className="right">100 / Month</h3>
            </div>
        </div>
    )
}