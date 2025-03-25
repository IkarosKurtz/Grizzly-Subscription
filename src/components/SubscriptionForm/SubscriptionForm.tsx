import "./SubscriptionForm.css"

import { useState } from "react"
import { TypeOfPayment } from "../../models/payments"
import { FormHeader } from "./FormHeader/FormHeader"
import { PaymentForm } from "./PaymentForm/PaymentForm"

export function SubscriptionForm() {
  const [selectedPayment, setSelectedPayment] = useState<TypeOfPayment>("cc")

  return (
    <section className="subscription-container">
      <FormHeader />
      <PaymentForm
        selectedPayment={selectedPayment}
        setSelectedPayment={setSelectedPayment}
      />
    </section>
  )
}
