'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TurbineSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function TurbineSpinner({ size = 'md', className = '' }: TurbineSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g transform="translate(50, 50)">
            {/* Turbine blades */}
            <path
              d="M 0,-40 L -8,-8 L 0,0 L 8,-8 Z"
              fill="#fbb213"
              opacity="0.8"
            />
            <path
              d="M 0,-40 L -8,-8 L 0,0 L 8,-8 Z"
              fill="#fbb213"
              opacity="0.8"
              transform="rotate(120)"
            />
            <path
              d="M 0,-40 L -8,-8 L 0,0 L 8,-8 Z"
              fill="#fbb213"
              opacity="0.8"
              transform="rotate(240)"
            />
            {/* Center hub */}
            <circle r="6" fill="#f59e0b" />
          </g>
        </svg>
      </motion.div>
    </div>
  )
}
