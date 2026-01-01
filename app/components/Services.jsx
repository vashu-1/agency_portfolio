'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useCursor } from '../context/CursorContext';

export default function Services() {
  const { textEnter, textLeave } = useCursor();
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description:
        'Creating stunning, modern websites that captivate your audience and elevate your brand presence.',
      image:
        'https://d33609liqwio9r.cloudfront.net/2025-12-31T14:43:41.288Z-view-3d-personal-computer-with-workstation.jpg',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Web Development',
      description:
        'Building robust, scalable web applications with cutting-edge technologies and best practices.',
      image:
        'https://d33609liqwio9r.cloudfront.net/2025-12-31T14:42:17.879Z-programmer-night.jpg',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Ecommerce',
      description:
        'Developing powerful online stores that drive sales and provide seamless shopping experiences.',
      image:
        'https://d33609liqwio9r.cloudfront.net/2025-12-31T14:39:51.028Z-online-shopping-concept.jpg',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description:
        'Crafting intuitive, user-centered designs that enhance usability and delight your customers.',
      image:
        'https://d33609liqwio9r.cloudfront.net/2025-12-31T14:44:46.448Z-view-3d-computer-device-with-peripheral-devices.jpg',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Branding',
      description:
        'Building memorable brand identities that resonate with your audience and stand out in the market.',
      image:
        'https://d33609liqwio9r.cloudfront.net/2025-12-31T14:37:38.249Z-fpkdl.com_960_1767191441_photo-corporate-identity-template-set-with-logo-sample-business-stationery-mockup_1235950-8063.jpg',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'SEO Optimization',
      description:
        'Boosting your online visibility and driving organic traffic with proven SEO strategies.',
      image:
        'https://d33609liqwio9r.cloudfront.net/2025-12-31T14:33:20.860Z-ai-powered-device-concept.jpg',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-black py-10 px-2 sm:px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div
          className="text-center mb-10 sm:mb-14 md:mb-16"
          data-aos="fade-down"
        >
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-base xs:text-lg sm:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-2">
            Comprehensive digital solutions tailored to elevate your business
            and achieve your goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden flex flex-col items-center xs:items-start"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Image on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Dark overlay to maintain readability */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-800/0 group-hover:from-purple-600/5 group-hover:to-purple-800/5 rounded-2xl transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 mb-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30 mx-auto xs:mx-0">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 text-center xs:text-left">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
