import { IconType } from 'react-icons'
import './SubscriptionForm.css'
import { FaCreditCard } from 'react-icons/fa6'
import { RiBankFill } from 'react-icons/ri'
import { GiBearHead } from 'react-icons/gi'

interface InputProps {
  title: string
  placeholder: string
}

function Input({ title, placeholder }: InputProps) {
  return (
    <div className='input-container'>
      <p>{title}</p>
      <input
        type='text'
        placeholder={placeholder}
      />
    </div>
  )
}

interface PaymentCardProps {
  title: string
  icon: IconType
}

function PaymentCard({ title, icon: Icon }: PaymentCardProps) {
  return (
    <div className='subscription-form-payment-card-container'>
      <Icon size={40} />
      <p>{title}</p>
    </div>
  )
}

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
        <div>
          <Input
            title='Enter First & Last Name'
            placeholder='Enter First & Last Name'
          />
        </div>
        <div className='subscription-form-payment'>
          <PaymentCard
            title='Credit Card'
            icon={FaCreditCard}
          />
          <PaymentCard
            title='Bank Transfer'
            icon={RiBankFill}
          />
          <PaymentCard
            title='Grizzly Points'
            icon={GiBearHead}
          />
        </div>
        <div>
          <Input
            title='Enter Email Address'
            placeholder='Enter Email Address'
          />
        </div>
        <div className='subscription-form-address'>
          <div>
            <Input
              title='Country'
              placeholder='Country'
            />
          </div>
          <div>
            <Input
              title='Postal Code'
              placeholder='Postal Code'
            />
          </div>
        </div>
      </section>
      <div className='subscription-footer'>
        <button>Cancel</button>
        <button className='accept-button'>Subscribe</button>
      </div>
    </section>
  )
}
