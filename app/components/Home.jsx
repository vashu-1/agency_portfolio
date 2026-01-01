'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useCursor } from '../context/CursorContext';

export default function Home() {
  const { textEnter, textLeave } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const statsRef = useRef(null);
  const buttonsRef = useRef(null);
  const characterRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // GSAP typing animation
    const ctx = gsap.context(() => {
      // Heading typing animation
      if (headingRef.current) {
        const headingLines =
          headingRef.current.querySelectorAll('.heading-line');

        headingLines.forEach((line, lineIndex) => {
          const text = line.textContent;
          line.textContent = '';
          line.style.opacity = '1';

          const chars = text.split('');
          const charSpans = chars.map((char) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            line.appendChild(span);
            return span;
          });

          gsap.to(charSpans, {
            opacity: 1,
            duration: 0.05,
            stagger: 0.03,
            ease: 'none',
            delay: lineIndex * 0.6,
          });
        });
      }

      // Stats bar animation
      if (statsRef.current && statsRef.current.children) {
        gsap.fromTo(
          statsRef.current.children,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 2.2,
          }
        );
      }

      // Subheading animation
      if (subheadingRef.current) {
        gsap.fromTo(
          subheadingRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 2.5,
          }
        );
      }

      // Buttons animation
      if (buttonsRef.current && buttonsRef.current.children) {
        gsap.fromTo(
          buttonsRef.current.children,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 2.8,
          }
        );
      }
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-black relative overflow-hidden pt-12 xs:pt-14 sm:pt-16"
    >
      {/* Animated background elements - subtle purple accents */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-3xl"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-600/25 rounded-full animate-ping delay-700"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-2 xs:px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Main heading */}
            <h1
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-7 leading-tight"
              style={{ perspective: '1000px' }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <span className="heading-line block text-white hover:scale-105 transition-transform duration-300">
                Launch Your{' '}
              </span>
              <span className="heading-line block bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                Vision into the
              </span>
              <span className="heading-line block text-white hover:scale-105 transition-transform duration-300">
                Digital Stratosphere
              </span>
            </h1>

            {/* Stats bar */}
            <div
              ref={statsRef}
              className="flex flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">
                  50+ Projects
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">
                  Fast Delivery
                </span>
              </div>
            </div>

            {/* Subheading */}
            <p
              ref={subheadingRef}
              className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-9 leading-relaxed"
            >
              We build high-performance websites and digital experiences that
              captivate audiences and drive real business growth.
            </p>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex  xs:flex-row flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12"
            >
              <button className="group relative bg-linear-to-r from-purple-600 to-purple-800 text-white px-5 md:px-8 py-2.5 md:py-4.5 text-sm md:text-md rounded-full hover:from-purple-700 hover:to-purple-900 transition-all duration-300 font-semibold hover:scale-105 overflow-hidden w-fit">
                <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                  View Portfolio
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
              <button className="group border-2 border-purple-500 text-purple-400 px-5 xs:px-6 py-2.5 xs:py-3 text-sm xs:text-base rounded-full hover:bg-purple-500/10 transition-all duration-300 font-semibold hover:scale-105 hover:border-purple-400 relative overflow-hidden w-fit">
                <span className="relative z-10 flex hover:text-white items-center justify-center gap-2 whitespace-nowrap">
                  Get a Quote
                  <svg
                    className="w-4 h-4 group-hover:rotate-45 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="pt-8 border-t border-purple-900/50">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                Trusted By
              </p>

              {/* People icons with overlap effect */}
              <div className="flex items-center gap-4">
                <div className="flex items-center -space-x-3">
                  {/* Person images from Unsplash */}
                  <div className="w-12 h-12 rounded-full border-4 border-black shadow-lg overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                      alt="Client"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-4 border-black shadow-lg overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                      alt="Client"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-4 border-black shadow-lg overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                      alt="Client"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-4 border-black shadow-lg overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                      alt="Client"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-sm font-bold border-4 border-black shadow-lg">
                    50+
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-white font-semibold text-lg">
                    50+ Happy Clients
                  </p>
                  <p className="text-gray-400 text-sm">
                    Join our growing family
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Character */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            } mt-8 lg:mt-0`}
          >
            <div className="relative">
              {/* Glowing effect behind character */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur-2xl opacity-10"></div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-800/10 rounded-full blur-xl"></div>

              {/* Character container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30 bg-linear-to-br from-purple-900/20 to-black/50 shadow-lg shadow-purple-500/20 p-4 xs:p-6 sm:p-8 md:p-12 flex items-center justify-center min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] md:min-h-[500px]">
                {/* Professional Workspace Illustration */}
                <div ref={characterRef} className="text-center relative w-full">
                  {/* Modern abstract background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
                  </div>

                  {/* Main illustration container */}
                  <div className="relative">
                    {/* Laptop/Monitor Setup */}
                    <div
                      className="relative mx-auto mb-4 sm:mb-6 md:mb-8 w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px]"
                      style={{ aspectRatio: '4/3' }}
                    >
                      {/* Monitor stand */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 xs:w-14 sm:w-16 h-6 xs:h-7 sm:h-8 bg-linear-to-b from-gray-700 to-gray-800 rounded-t-lg"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 xs:w-28 sm:w-32 h-2 xs:h-2.5 sm:h-3 bg-linear-to-b from-gray-800 to-gray-900 rounded-full"></div>

                      {/* Monitor Frame */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-3/4 bg-linear-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-xl shadow-2xl p-2 xs:p-2.5 sm:p-3">
                        {/* Screen */}
                        <div className="w-full h-full bg-linear-to-br from-gray-900 to-black rounded-lg overflow-hidden relative">
                          {/* Code Editor Interface */}
                          <div className="absolute inset-0 p-2 xs:p-3 sm:p-4">
                            {/* VS Code style sidebar */}
                            <div className="flex gap-1 xs:gap-1.5 sm:gap-2 h-full">
                              <div className="w-8 xs:w-10 sm:w-12 bg-gray-800/50 rounded flex flex-col gap-1 xs:gap-1.5 sm:gap-2 p-1 xs:p-1.5 sm:p-2">
                                <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-purple-500/30 rounded"></div>
                                <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-purple-500/20 rounded"></div>
                                <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-purple-500/20 rounded"></div>
                              </div>

                              {/* Code area */}
                              <div className="flex-1 space-y-1 xs:space-y-1.5 sm:space-y-2">
                                <div className="flex gap-1 xs:gap-1.5 sm:gap-2">
                                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-purple-400 rounded-full"></div>
                                  <div className="w-16 xs:w-20 sm:w-24 h-1.5 xs:h-2 bg-purple-500/40 rounded"></div>
                                </div>
                                <div className="space-y-1 xs:space-y-1.5 mt-2 xs:mt-2.5 sm:mt-3">
                                  <div className="w-20 xs:w-24 sm:w-32 h-1 xs:h-1.5 bg-blue-400/60 rounded"></div>
                                  <div className="w-24 xs:w-32 sm:w-40 h-1 xs:h-1.5 bg-purple-400/60 rounded ml-2 xs:ml-3 sm:ml-4"></div>
                                  <div className="w-22 xs:w-28 sm:w-36 h-1 xs:h-1.5 bg-pink-400/60 rounded ml-2 xs:ml-3 sm:ml-4"></div>
                                  <div className="w-18 xs:w-22 sm:w-28 h-1 xs:h-1.5 bg-purple-400/60 rounded ml-2 xs:ml-3 sm:ml-4"></div>
                                  <div className="w-20 xs:w-24 sm:w-32 h-1 xs:h-1.5 bg-blue-400/60 rounded"></div>
                                  <div className="w-16 xs:w-20 sm:w-24 h-1 xs:h-1.5 bg-green-400/60 rounded ml-2 xs:ml-3 sm:ml-4"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Screen glow effect */}
                          <div className="absolute inset-0 bg-linear-to-t from-purple-600/20 via-transparent to-transparent"></div>
                        </div>
                      </div>

                      {/* Floating UI Elements */}
                      <div className="absolute -right-4 xs:-right-6 sm:-right-8 top-4 xs:top-6 sm:top-8 w-12 xs:w-16 sm:w-20 h-10 xs:h-12 sm:h-16 bg-linear-to-br from-purple-600/80 to-purple-800/80 backdrop-blur-sm rounded-md xs:rounded-lg shadow-lg shadow-purple-500/50 p-1 xs:p-1.5 sm:p-2 border border-purple-400/30">
                        <div className="space-y-0.5 xs:space-y-1">
                          <div className="w-full h-0.5 xs:h-1 bg-white/60 rounded"></div>
                          <div className="w-3/4 h-0.5 xs:h-1 bg-white/40 rounded"></div>
                          <div className="w-full h-0.5 xs:h-1 bg-white/60 rounded"></div>
                        </div>
                      </div>

                      {/* Design Tool Icon */}
                      <div className="absolute -left-4 xs:-left-6 sm:-left-8 top-8 xs:top-12 sm:top-16 w-10 xs:w-12 sm:w-16 h-10 xs:h-12 sm:h-16 bg-linear-to-br from-pink-600/80 to-purple-600/80 backdrop-blur-sm rounded-lg xs:rounded-xl shadow-lg shadow-pink-500/50 flex items-center justify-center border border-pink-400/30">
                        <svg
                          className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          ></path>
                        </svg>
                      </div>

                      {/* Rocket Icon */}
                      <div className="absolute -right-6 xs:-right-8 sm:-right-12 bottom-6 xs:bottom-8 sm:bottom-12 w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 bg-linear-to-br from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-full shadow-lg shadow-blue-500/50 flex items-center justify-center border border-blue-400/30">
                        <svg
                          className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-white transform rotate-45"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 mt-4 xs:mt-6 sm:mt-8">
                      <h3
                        className="text-white font-bold text-lg xs:text-xl sm:text-2xl"
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                      >
                        Digital Craftsmanship
                      </h3>
                      <p className="text-purple-400 font-semibold text-base xs:text-lg">
                        Where Code Meets Design
                      </p>
                      <p className="text-gray-400 text-xs xs:text-sm max-w-[280px] xs:max-w-xs mx-auto">
                        Building modern web experiences with cutting-edge
                        technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 xs:-bottom-5 sm:-bottom-6 -left-4 xs:-left-5 sm:-left-6 bg-black/90 backdrop-blur-sm border-2 border-purple-500/50 rounded-lg xs:rounded-xl px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 shadow-lg shadow-purple-500/30">
                <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                  <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-white font-semibold text-xs xs:text-sm">
                      Available Now
                    </p>
                    <p className="text-gray-400 text-[10px] xs:text-xs">
                      For New Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
