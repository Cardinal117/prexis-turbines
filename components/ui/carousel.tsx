'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'

interface CarouselProps {
  images: string[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export function ImageCarousel({ 
  images, 
  autoPlay = true, 
  interval = 5000, 
  className = '' 
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const intervalRef = useRef<NodeJS.Timeout>()

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const pauseAutoPlay = () => {
    setIsPaused(true)
  }

  const resumeAutoPlay = () => {
    setIsPaused(false)
  }

  useEffect(() => {
    if (autoPlay && !isPaused) {
      // Clear any existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      
      // Set up new interval
      intervalRef.current = setInterval(nextSlide, interval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [autoPlay, isPaused, interval, nextSlide])

  // Reset auto-play pause after interaction
  useEffect(() => {
    if (autoPlay && isPaused) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false)
      }, interval * 2) // Resume after 2 intervals
    }
  }, [currentIndex, autoPlay, isPaused, interval])

  if (!images || images.length === 0) {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-gray-100 rounded-lg ${className}`}>
        <p className="text-gray-500">No images to display</p>
      </div>
    )
  }

  return (
    <div 
      className={`relative w-full h-full overflow-hidden rounded-lg ${className}`}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      onFocus={pauseAutoPlay}
      onBlur={resumeAutoPlay}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          className="w-full h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            loading={currentIndex === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>
      
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm"
            onClick={prevSlide}
            onFocus={pauseAutoPlay}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm"
            onClick={nextSlide}
            onFocus={pauseAutoPlay}
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'
                }`}
                onClick={() => goToSlide(index)}
                onFocus={pauseAutoPlay}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
          
          {autoPlay && (
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="px-3 py-1 text-sm bg-black/50 text-white rounded-full hover:bg-black/70 backdrop-blur-sm"
                aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
              >
                {isPaused ? '▶' : '⏸'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}