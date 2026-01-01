'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useCursor } from '../context/CursorContext';
import hoverEffect from 'hover-effect';

export default function About() {
  const { textEnter, textLeave } = useCursor();
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      new hoverEffect({
        parent: imageRef.current,
        intensity: 0.3,
        image1:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        image2:
          'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
        displacementImage:
          'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      });
    }
  }, []);

  const team = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      specialty: 'Brand Strategy',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Lead Developer',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      specialty: 'Full Stack',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'UX/UI Designer',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      specialty: 'User Experience',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Tech Lead',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      specialty: 'Architecture',
    },
  ];

  const values = [
    {
      id: 1,
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Innovation First',
      description:
        'We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.',
    },
    {
      id: 2,
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Quality Driven',
      description:
        'Every project undergoes rigorous testing to ensure excellence in every detail.',
    },
    {
      id: 3,
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Client Focused',
      description:
        'Your success is our mission. We build lasting partnerships through transparency.',
    },
    {
      id: 4,
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Timely Delivery',
      description:
        'We respect deadlines and deliver projects on time without compromising quality.',
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20" data-aos="fade-down">
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            About{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate creators, developers, and strategists
            dedicated to transforming bold ideas into exceptional digital
            experiences.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          <div
            className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-0"
            data-aos="fade-right"
          >
            <div className="absolute -inset-2 sm:-inset-4 bg-linear-to-r from-purple-600/20 to-purple-800/20 blur-3xl rounded-full"></div>
            <div
              ref={imageRef}
              className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-500/30"
            />
          </div>
          <div data-aos="fade-left" className="px-2 sm:px-0">
            <h3
              className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Our <span className="text-purple-400">Story</span>
            </h3>
            <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm xs:text-base sm:text-lg leading-relaxed">
              <p>
                Founded in 2018, we started as a small team of dreamers who
                believed that great design and powerful technology could change
                the world. What began as a passion project has evolved into a
                full-service digital agency.
              </p>
              <p>
                Today, we work with startups and established brands alike,
                helping them navigate the digital landscape with innovative
                solutions that drive real results. Our diverse team brings
                together expertise in design, development, strategy, and
                marketing.
              </p>
              <p>
                We're not just building websites and apps – we're crafting
                experiences that connect brands with their audiences in
                meaningful ways.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h3
            className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12 md:mb-16"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            What <span className="text-purple-400">Drives</span> Us
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={value.id}
                className="group bg-linear-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-purple-600 to-purple-800 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-xs xs:text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3
            className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12 md:mb-16"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Meet Our <span className="text-purple-400">Team</span>
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {team.map((member, index) => (
              <div
                key={member.id}
                className="group relative flex flex-col items-center"
                style={{ animationDelay: `${index * 100}ms` }}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Hexagonal Image Container */}
                <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 mb-4 sm:mb-6">
                  <div
                    className="absolute inset-0 transition-all duration-500 "
                    style={{
                      clipPath:
                        'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      border: '3px solid rgba(168, 85, 247, 0.3)',
                    }}
                  >
                    <div
                      className="relative w-full h-full overflow-hidden"
                      style={{
                        clipPath:
                          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover  transition-transform duration-500"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Details Box - Shows on Hover */}
                <div className="relative w-full">
                  <div className="bg-linear-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20 group-hover:-translate-y-2">
                    <h4 className="text-base xs:text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-purple-400 text-xs xs:text-sm font-medium mb-2 sm:mb-3">
                      {member.role}
                    </p>

                    {/* Specialization - Hidden by default, shows on hover */}
                    <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500">
                      <div className="pt-2 sm:pt-3 border-t border-purple-500/20">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          Specialty
                        </p>
                        <p className="text-gray-300 text-xs xs:text-sm font-medium">
                          {member.specialty}
                        </p>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-purple-600/0 to-purple-800/0 group-hover:from-purple-600/5 group-hover:to-purple-800/5 rounded-xl sm:rounded-2xl transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
