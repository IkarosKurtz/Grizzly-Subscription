import "./PaymentForm.css"

import { FaCreditCard } from "react-icons/fa6"
import { RiBankFill } from "react-icons/ri"
import { GiBearHead } from "react-icons/gi"
import { FormTextInput } from "../FormTextInput/FormTextInput"
import { PaymentCard } from "../PaymentCard/PaymentCard"
import { TypeOfPayment } from "../../../models/payments"

interface PaymentFormProps {
  selectedPayment: TypeOfPayment
  setSelectedPayment: (type: TypeOfPayment) => void
}

export function PaymentForm({
  selectedPayment,
  setSelectedPayment,
}: PaymentFormProps) {
  return (
    <section className="subscription-form">
      <div>
        <FormTextInput
          type="text"
          title="Billed To"
          placeholder="Enter First & Last Name"
        />
      </div>
      <div className="subscription-form-payment">
        <p>Payment Method</p>
        <div>
          <PaymentCard
            title="Credit Card"
            type="cc"
            color="var(--primary-400)"
            isSelected={selectedPayment}
            onSelect={setSelectedPayment}
            Icon={FaCreditCard}
          />
          <PaymentCard
            title="Bank Transfer"
            type="bt"
            color="rgb(140, 140, 124)"
            isSelected={selectedPayment}
            onSelect={setSelectedPayment}
            Icon={RiBankFill}
          />
          <PaymentCard
            title="Grizzly Points"
            type="gp"
            color="rgb(141, 87, 25)"
            isSelected={selectedPayment}
            onSelect={setSelectedPayment}
            Icon={GiBearHead}
          />
        </div>
      </div>
      <div>
        <FormTextInput
          type="email"
          title="Email Address"
          placeholder="Enter Email Address"
        />
      </div>
      <div className="subscription-form-address">
        <div>
          <FormTextInput
            type="text"
            title="Country"
            placeholder="Country"
          />
        </div>
        <div>
          <FormTextInput
            type="number"
            title="Postal Code"
            placeholder="00270"
          />
        </div>
      </div>
      <div className="subscription-controllers">
        <button>Cancel</button>
        <button className="accept-button">Proceed</button>
      </div>
    </section>
  )
}
