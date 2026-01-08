'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Button } from './button'

interface CarouselProps {
  images: string[]
  autoPlay?: boolean
  interval?: number
  className?: string
  aspectRatio?: string // e.g., "16/9", "4/3", "1/1"
}

export function ImageCarousel({ 
  images, 
  autoPlay = true, 
  interval = 5000, 
  className = '',
  aspectRatio = "16/9"
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout>()
  const resizeTimeoutRef = useRef<NodeJS.Timeout>()

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Update container size for consistent image sizing
  const updateContainerSize = useCallback(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setContainerSize({ width, height })
    }
  }, [])

  // Initialize and update container size
  useEffect(() => {
    updateContainerSize()
    
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      resizeTimeoutRef.current = setTimeout(updateContainerSize, 150)
    }

    window.addEventListener('resize', handleResize)
    
    // Also update size when images load
    const imagesToLoad = images.map(src => {
      const img = new Image()
      img.src = src
      img.onload = updateContainerSize
      return img
    })

    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [images, updateContainerSize])

  // Auto-play logic
  useEffect(() => {
    if (autoPlay && !isPaused && images.length > 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      
      intervalRef.current = setInterval(nextSlide, interval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoPlay, isPaused, interval, nextSlide, images.length])

  // Reset auto-play pause after interaction
  useEffect(() => {
    if (autoPlay && isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false)
      }, interval * 2)
      
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, autoPlay, isPaused, interval])

  if (!images || images.length === 0) {
    return (
      <div 
        className={`relative w-full flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
        style={{ aspectRatio }}
      >
        <p className="text-gray-500">No images to display</p>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-lg bg-black/5 ${className}`}
      style={{ aspectRatio }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fixed container for all images to prevent layout shift */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-contain"
              loading={currentIndex === 0 ? "eager" : "lazy"}
              decoding="async"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                margin: '0 auto',
                display: 'block'
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Preload next image to prevent flicker */}
        {images.length > 1 && (
          <div className="absolute inset-0 pointer-events-none opacity-0" aria-hidden="true">
            <img
              src={images[(currentIndex + 1) % images.length]}
              alt=""
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        )}
      </div>
      
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-110 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
          
          {autoPlay && (
            <div className="absolute top-4 right-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsPaused(!isPaused)}
                className="bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg"
                aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
              >
                {isPaused ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <Pause className="h-4 w-4" />
                )}
              </Button>
            </div>
          )}
          
          {/* Optional: Show current slide number */}
          <div className="absolute top-4 left-4 bg-black/50 text-white text-sm px-2 py-1 rounded-full backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}