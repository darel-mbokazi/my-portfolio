'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoCaretBackCircle, IoCaretForwardCircle } from 'react-icons/io5'

const PreviewModal = ({ isOpen, onClose, projectImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectImages.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white p-4 rounded-xl max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-3xl z-10 bg-white text-black hover:text-red-500">
          &times;
        </button>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={projectImages[currentIndex]}
              src={projectImages[currentIndex]}
              alt={`Project preview ${currentIndex + 1}`}
              className="rounded-lg w-full h-auto"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          {projectImages.length > 1 && (
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="text-5xl opacity-50 hover:text-gold">
                <IoCaretBackCircle />
              </button>
              <button
                onClick={handleNext}
                className="text-5xl opacity-50 hover:text-gold">
                <IoCaretForwardCircle />
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-sm mt-3 text-black">
          Image {currentIndex + 1} of {projectImages.length}
        </p>
      </motion.div>
    </div>
  )
}

export default PreviewModal
