import "./App.css"
import { SubscriptionForm } from "./components/SubscriptionForm/SubscriptionForm"
import { PaymentOptions } from "./components/PaymentOption/PaymentOptions"
import { CostProvider } from "./Context/costProvider"

function App() {
  return (
    <>
      <div className="main-container">
        <SubscriptionForm />

        <CostProvider>
          <PaymentOptions />
        </CostProvider>
      </div>
    </>
  )
}

export default App
