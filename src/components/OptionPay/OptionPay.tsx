import "./OptionPay.css"

import { SubCost } from "../../models/SubCost"
import { useCostContext } from "../../Context/useCostContext"
import { motion } from "framer-motion"

export function OptionPay({
  SubType,
  Cost,
  isSelected,
  onSelect,
}: SubCost & { isSelected: boolean; onSelect: () => void }) {
  const { setCost, setSubType } = useCostContext()

  return (
    <motion.div
      animate={{
        backgroundColor: isSelected
          ? "var(--primary-800)"
          : "var(--primary-500)",
        scale: isSelected ? 1.04 : 1,
      }}
      className={`option-card `}
      onClick={() => {
        setCost(Cost)
        setSubType(SubType)
        onSelect()
      }}
    >
      <div className="dot">
        <motion.div
          className="check"
          animate={{ scale: isSelected ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="right">
        <h4>Pay {SubType}</h4>
        <h5>${Cost} / Month / Member</h5>
      </div>
    </motion.div>
  )
}
