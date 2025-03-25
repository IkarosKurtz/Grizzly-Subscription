import "./PaymentOptions.css"
import { OptionPay } from "../OptionPay/OptionPay"
import { Subs } from "../../info/Subs"
import { useCostContext } from "../../Context/useCostContext"
import { useState } from "react"

export function PaymentOptions() {
  const [selected, setSelected] = useState(-1)
  console.log(selected)

  const { cost, subType } = useCostContext()
  return (
    <div className="select-plan">
      <div className="interior">
        <h2 className="title">Starter Plan</h2>
        <div className="options">
          {Subs.map((sub, idx) => {
            return (
              <OptionPay
                key={idx}
                {...sub}
                isSelected={selected === idx}
                onSelect={() => setSelected(idx)}
              />
            )
          })}
        </div>
        <hr className="separador" />

        <div className="result">
          <h3>Selected Plan: {subType}</h3>
          <div className={`total ${selected === -1 ? "hide" : ""}`}>
            <h3 className="leftTot">Total</h3>
            <h3 className="rightTot">$ {cost} / Month</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
