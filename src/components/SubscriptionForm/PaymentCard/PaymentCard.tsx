import "./PaymentCard.css"

import type { IconType } from "react-icons"
import { motion, AnimatePresence } from "framer-motion"
import { TypeOfPayment } from "../../../models/payments"

interface PaymentCardProps {
  title: string
  Icon: IconType
  type: TypeOfPayment
  isSelected: TypeOfPayment
  color?: string
  onSelect: (type: TypeOfPayment) => void
}

export function PaymentCard({
  title,
  Icon,
  type,
  onSelect,
  isSelected,
  color = "var(--primary-900)",
}: PaymentCardProps) {
  const containerVariants = {
    selected: {
      scale: 1.1,
      backgroundColor: color,
      color: "var(--text-50)",
      border: `2px solid ${color}`,
      boxShadow: `0 0 10px ${color}`,
    },
    unselected: {
      scale: 1,
      backgroundColor: "transparent",
      color: "var(--text-800)",
      border: "2px solid var(--secondary-400)",
      boxShadow: "none",
    },
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="unselected"
        animate={isSelected === type ? "selected" : "unselected"}
        className="subscription-form-payment-card-container"
        onClick={() => onSelect(type)}
      >
        <Icon size={50} />
        {isSelected === type && (
          <>
            <motion.div
              initial={{ border: "none", opacity: 0 }}
              animate={{ border: "1px solid var(--text-50)", opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ border: "none" }}
              className="subscription-form-payment-card-separator"
            />
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              exit={{ opacity: 0 }}
            >
              {title}
            </motion.p>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
