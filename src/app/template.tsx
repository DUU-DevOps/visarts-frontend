'use client'

import { motion } from "framer-motion"

export default function Template({ children, delay } :
    {
        children: React.ReactNode,
        delay?: number
    }) {
  return (
    <motion.div
      initial={{opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ease: "easeOut", duration: 0.25, delay: delay || 0}}
    >
      {children}
    </motion.div>
  )
}