import './App.css'
import { SubscriptionForm } from './components/SubscriptionForm/SubscriptionForm'
import { PaymentOptions } from './components/PaymentOption/PaymentOptions'

function App() {
  return (
    <>
      <div className='main-container'>
        <SubscriptionForm />
        <PaymentOptions />
      </div>
    </>
  )
}

export default App
