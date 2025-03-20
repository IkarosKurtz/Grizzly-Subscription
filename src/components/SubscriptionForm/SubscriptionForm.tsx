import './SubscriptionForm.css'

export function SubscriptionForm() {
  return (
    <section className='subscription-container'>
      <div className='subscription-header'>
        <h1>
          Upgrade To A <span>Pro Beast</span>
        </h1>
        <p>
          Upgrade today and get access to all Grizzly features, and future AI
          features!!
        </p>
      </div>
      <section className='subscription-form'>
        <p>Enter First and Last Name</p>
        <div>
          <p>Credit Card</p>
          <p>Bank Transfer</p>
          <p>Points</p>
        </div>
        <p>Enter Email Address</p>
        <p>Country</p>
        <p>Postal Code</p>
      </section>
      <div className='subscription-footer'>
        <button>Cancel</button>
        <button>Subscribe</button>
      </div>
    </section>
  )
}
