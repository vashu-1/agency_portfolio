'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useCursor } from '../context/CursorContext';

export default function Work() {
  const { textEnter, textLeave } = useCursor();
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Pure Services',
      description: 'Home Services',
      thumbnail:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      video:
        'https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4',
      tags: ['Home', 'Repairs', 'Services'],
      link: 'https://example.com/pure-services',
    },
    {
      id: 2,
      title: 'The Vanilla Pod',
      description: 'Cafe & Patisserie',
      thumbnail:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      video:
        'https://videos.pexels.com/video-files/3130182/3130182-uhd_2560_1440_30fps.mp4',
      tags: ['Cafe', 'Food', 'Local'],
      link: 'https://example.com/vanilla-pod',
    },
    {
      id: 3,
      title: 'Merne at Lighthouse',
      description: 'Restaurant & Bar',
      thumbnail:
        'https://d33609liqwio9r.cloudfront.net/2025-12-31T16:03:51.422Z-Screenshot%202025-12-31%20213537.png',
      video: '/Merne at Lighthouse.mp4',
      tags: ['Dining', 'Weddings', 'Events'],
      link: 'https://www.merne.com.au/',
    },
    {
      id: 4,
      title: 'Synergy Private Health',
      description: 'Healthcare',
      thumbnail:
        'https://d33609liqwio9r.cloudfront.net/2025-12-31T16:05:46.848Z-Screenshot%202025-12-31%20213819.png',
      video: '/Synergy Private Health.mp4',
      tags: ['Wellness', 'Concierge Care', 'Health'],
      link: 'https://www.synergyprivatehealth.com/',
    },
    {
      id: 5,
      title: 'Youthful Medicine',
      description: 'Aesthetic & Wellness',
      thumbnail:
        'https://d33609liqwio9r.cloudfront.net/2025-12-31T16:07:35.350Z-Screenshot%202025-12-31%20214022.png',
      video: '/YOUTHFUL MEDICINE .mp4',
      tags: ['Longevity', 'Aesthetics', 'Wellness'],
      link: 'https://youthfulmedicine.com/',
    },
    {
      id: 6,
      title: 'Diamante',
      description: 'Web3',
      thumbnail:
        'https://d33609liqwio9r.cloudfront.net/2025-12-31T16:09:32.169Z-Screenshot%202025-12-31%20214227.png',
      video: '/Diamante.mp4',
      tags: ['Privacy', 'Web3', 'SDK'],
      link: 'https://www.diamante.io/',
    },
  ];

  return (
    <section id="work" className="min-h-screen bg-black py-10 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div
          className="text-center mb-10 sm:mb-14 md:mb-16"
          data-aos="fade-down"
        >
          <h2
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-gray-400 text-base xs:text-lg sm:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-2">
            Explore our portfolio of successful projects that showcase our
            expertise and creativity in delivering exceptional digital
            solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.025] sm:hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Thumbnail/Video Container */}
                <div className="relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-64 overflow-hidden">
                  {hoveredProject === project.id ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-800/0 group-hover:from-purple-600/5 group-hover:to-purple-800/5 transition-all duration-500 pointer-events-none"></div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
