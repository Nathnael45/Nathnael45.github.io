"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut", delay: i * 0.08 },
  }),
}

export function ScrollReveal({ children, index = 0 }: { children: ReactNode; index?: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index}
    >
      {children}
    </motion.div>
  )
}
