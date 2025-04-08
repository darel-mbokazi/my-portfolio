'use client'

import React, { useState } from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import PreviewModal from './PreviewModal'

const ProjectCard = ({
  image,
  title,
  techUsed,
  gitUrl,
  previewUrl,
  projectImages,
}) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const technologies = techUsed.split(',').map((tech) => tech.trim())

  const handlePreviewClick = (e) => {
    if (!previewUrl) {
      e.preventDefault()
      setModalOpen(true)
    }
  }

  return (
    <div className="bg-[#181818] p-5 rounded-lg">
      <div className="relative group">
        <img src={image} alt={title} className="h-52 object-fill rounded-xl" />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 gap-10">
          <Link
            href={gitUrl || '#'}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <CodeBracketIcon className="h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-gold" />
          </Link>

          <a
            href={previewUrl || '#'}
            onClick={handlePreviewClick}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <EyeIcon className="h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-gold" />
          </a>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 py-6 flex-grow h-40 max-sm:h-auto max-lg:h-72 overflow-hidden">
        <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gold text-xs font-medium text-[#181818] p-2 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Modal for preview */}
      <PreviewModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        projectImages={projectImages}
      />
    </div>
  )
}

export default ProjectCard
